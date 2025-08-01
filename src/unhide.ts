import chalk from 'chalk';
import {
  isHiddenComment,
  extractCommentId,
  loadCommentCache,
  readFileLines,
  writeFileLines,
  fileExists,
  getRelativePath
} from './utils';
import { UnhideOptions } from './types';

export function unhideComments(options: UnhideOptions): void {
  const { filePath, lineNumber, commentId, force = false } = options;

  if (!fileExists(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const lines = readFileLines(filePath);
  const cache = loadCommentCache();
  const relativePath = getRelativePath(filePath);

  if (!cache[relativePath]) {
    console.log(chalk.yellow('No hidden comments found for this file'));
    return;
  }

  let restoredCount = 0;
  const newLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const currentLineNumber = i + 1;

    // If specific line is requested, only process that line
    if (lineNumber && currentLineNumber !== lineNumber) {
      newLines.push(line);
      continue;
    }

    if (isHiddenComment(line)) {
      const extractedId = extractCommentId(line);
      
      // If specific comment ID is requested, only process that one
      if (commentId && extractedId !== commentId) {
        newLines.push(line);
        continue;
      }

      if (extractedId && cache[relativePath][extractedId]) {
        const originalComment = cache[relativePath][extractedId];
        
        // Check if this is a multi-line comment (contains newlines)
        if (originalComment.includes('\n')) {
          // Split the multi-line comment and add each line
          const commentLines = originalComment.split('\n');
          newLines.push(...commentLines);
          restoredCount++;
          
          console.log(chalk.green(`✓ Restored multi-line comment at line ${currentLineNumber}: ${commentLines[0].trim()}`));
          console.log(chalk.gray(`  (${commentLines.length} lines restored)`));
        } else {
          // Single-line comment
          newLines.push(originalComment);
          restoredCount++;
          
          console.log(chalk.green(`✓ Restored comment at line ${currentLineNumber}: ${originalComment.trim()}`));
        }
        
        // Remove from cache
        delete cache[relativePath][extractedId];
      } else {
        // Keep the hidden marker if no cache entry found
        newLines.push(line);
        console.log(chalk.yellow(`⚠ No cache entry found for hidden comment at line ${currentLineNumber}`));
      }
    } else {
      newLines.push(line);
    }
  }

  if (restoredCount === 0) {
    if (lineNumber) {
      console.log(chalk.yellow(`No hidden comments found at line ${lineNumber}`));
    } else if (commentId) {
      console.log(chalk.yellow(`No hidden comment found with ID: ${commentId}`));
    } else {
      console.log(chalk.yellow('No hidden comments found in file'));
    }
    return;
  }

  // Clean up empty file entries in cache
  if (Object.keys(cache[relativePath]).length === 0) {
    delete cache[relativePath];
  }

  // Save updated cache
  if (Object.keys(cache).length > 0) {
    const fs = require('fs');
    fs.writeFileSync('.comment-cache.json', JSON.stringify(cache, null, 2));
  } else {
    // Remove cache file if empty
    const fs = require('fs');
    if (fs.existsSync('.comment-cache.json')) {
      fs.unlinkSync('.comment-cache.json');
    }
  }

  // Write updated file
  writeFileLines(filePath, newLines);

  console.log(chalk.blue(`\n✓ Successfully restored ${restoredCount} comment(s) in ${filePath}`));
  if (Object.keys(cache).length > 0) {
    console.log(chalk.gray(`Cache updated: .comment-cache.json`));
  } else {
    console.log(chalk.gray(`Cache file removed (no more hidden comments)`));
  }
} 