import chalk from 'chalk';
import {
  generateCommentId,
  isHideableComment,
  isMultiLineCommentStart,
  findMultiLineComment,
  createHiddenMarker,
  loadCommentCache,
  saveCommentCache,
  readFileLines,
  writeFileLines,
  fileExists,
  getRelativePath
} from './utils';
import { HideOptions } from './types';

export function hideComments(options: HideOptions): void {
  const { filePath, lineNumber, force = false } = options;

  if (!fileExists(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const lines = readFileLines(filePath);
  const cache = loadCommentCache();
  const relativePath = getRelativePath(filePath);
  
  // Initialize file entry in cache if it doesn't exist
  if (!cache[relativePath]) {
    cache[relativePath] = {};
  }

  let hiddenCount = 0;
  const newLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const currentLineNumber = i + 1;

    // If specific line is requested, only process that line
    if (lineNumber && currentLineNumber !== lineNumber) {
      newLines.push(line);
      continue;
    }

    if (isMultiLineCommentStart(line)) {
      // Find the complete multi-line comment
      const { commentLines, endIndex } = findMultiLineComment(lines, i);
      
      // Generate unique ID for this comment block
      const commentId = generateCommentId();
      const hiddenMarker = createHiddenMarker(commentId);
      
      // Store original comment block in cache (join with newlines)
      cache[relativePath][commentId] = commentLines.join('\n');
      
      // Replace the entire comment block with a single hidden marker
      newLines.push(hiddenMarker);
      hiddenCount++;
      
      // Skip the lines we've already processed
      i = endIndex;
      
      console.log(chalk.green(`✓ Hidden multi-line comment at line ${currentLineNumber}: ${commentLines[0].trim()}`));
      if (commentLines.length > 1) {
        console.log(chalk.gray(`  (${commentLines.length} lines total)`));
      }
    } else if (isHideableComment(line)) {
      // Handle single-line comments (backward compatibility)
      const commentId = generateCommentId();
      const hiddenMarker = createHiddenMarker(commentId);
      
      // Store original comment in cache
      cache[relativePath][commentId] = line;
      
      // Replace with hidden marker
      newLines.push(hiddenMarker);
      hiddenCount++;
      
      console.log(chalk.green(`✓ Hidden comment at line ${currentLineNumber}: ${line.trim()}`));
    } else {
      newLines.push(line);
    }
  }

  if (hiddenCount === 0) {
    if (lineNumber) {
      console.log(chalk.yellow(`No hideable comments found at line ${lineNumber}`));
    } else {
      console.log(chalk.yellow('No hideable comments found in file'));
    }
    return;
  }

  // Save updated cache
  saveCommentCache(cache);

  // Write updated file
  writeFileLines(filePath, newLines);

  console.log(chalk.blue(`\n✓ Successfully hidden ${hiddenCount} comment(s) in ${filePath}`));
  console.log(chalk.gray(`Cache updated: .comment-cache.json`));
} 