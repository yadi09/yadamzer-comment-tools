#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { hideComments } from './hide';
import { unhideComments } from './unhide';
import { HideOptions, UnhideOptions } from './types';

const program = new Command();

program
  .name('comment-tools')
  .description('CLI tool to hide and unhide developer comments in React + TypeScript projects')
  .version('1.0.0');

program
  .command('hide')
  .description('Hide hideable comments in a file')
  .argument('<file>', 'Path to the file to process')
  .option('-l, --line <number>', 'Hide comment at specific line number')
  .option('-f, --force', 'Force operation without confirmation')
  .action((file: string, options: { line?: string; force?: boolean }) => {
    try {
      const hideOptions: HideOptions = {
        filePath: file,
        lineNumber: options.line ? parseInt(options.line) : undefined,
        force: options.force || false
      };
      
      hideComments(hideOptions);
    } catch (error) {
      console.error(chalk.red(`Error: ${error}`));
      process.exit(1);
    }
  });

program
  .command('unhide')
  .description('Unhide hidden comments in a file')
  .argument('<file>', 'Path to the file to process')
  .option('-l, --line <number>', 'Unhide comment at specific line number')
  .option('-i, --id <id>', 'Unhide specific comment by ID')
  .option('-f, --force', 'Force operation without confirmation')
  .action((file: string, options: { line?: string; id?: string; force?: boolean }) => {
    try {
      const unhideOptions: UnhideOptions = {
        filePath: file,
        lineNumber: options.line ? parseInt(options.line) : undefined,
        commentId: options.id,
        force: options.force || false
      };
      
      unhideComments(unhideOptions);
    } catch (error) {
      console.error(chalk.red(`Error: ${error}`));
      process.exit(1);
    }
  });

program
  .command('status')
  .description('Show status of hidden comments')
  .argument('[file]', 'Path to the file to check (optional)')
  .action((file?: string) => {
    try {
      const fs = require('fs');
      const path = require('path');
      
      if (fs.existsSync('.comment-cache.json')) {
        const cache = JSON.parse(fs.readFileSync('.comment-cache.json', 'utf-8'));
        
        if (Object.keys(cache).length === 0) {
          console.log(chalk.blue('No hidden comments found'));
          return;
        }
        
        console.log(chalk.blue('📋 Hidden Comments Status:'));
        console.log('');
        
        for (const [filePath, comments] of Object.entries(cache)) {
          const commentCount = Object.keys(comments as object).length;
          console.log(chalk.cyan(`${filePath}: ${commentCount} hidden comment(s)`));
          
          if (file && path.relative(process.cwd(), file) === filePath) {
            console.log(chalk.gray('  Hidden comment IDs:'));
            for (const [id, comment] of Object.entries(comments as object)) {
              console.log(chalk.gray(`    ${id}: ${(comment as string).trim()}`));
            }
          }
        }
      } else {
        console.log(chalk.blue('No hidden comments found'));
      }
    } catch (error) {
      console.error(chalk.red(`Error: ${error}`));
      process.exit(1);
    }
  });

// Add some helpful information
program.addHelpText('after', `

Examples:
  $ comment-tools hide src/components/Editor/Canvas.tsx
  $ comment-tools hide src/components/Editor/Canvas.tsx --line 42
  $ comment-tools unhide src/components/Editor/Canvas.tsx
  $ comment-tools unhide src/components/Editor/Canvas.tsx --line 42
  $ comment-tools status

Supported comment tags:
  // @dev: Your comment here
  // @hideable: Your comment here
`);

program.parse(); 