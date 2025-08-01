import * as fs from 'fs';
import * as path from 'path';
import { nanoid } from 'nanoid';
import { CommentCache } from './types';

const CACHE_FILE = '.comment-cache.json';

export function generateCommentId(): string {
  return `yct:${nanoid(6)}`;
}

export function isHideableComment(line: string): boolean {
  const trimmed = line.trim();
  return trimmed.startsWith('// @dev:') || trimmed.startsWith('// @hideable:');
}

export function isMultiLineCommentStart(line: string): boolean {
  const trimmed = line.trim();
  return trimmed.startsWith('// @dev:') || trimmed.startsWith('// @hideable:');
}

export function isCommentLine(line: string): boolean {
  const trimmed = line.trim();
  return trimmed.startsWith('//') || 
         trimmed.startsWith('/*') || 
         trimmed.startsWith('*/') || 
         trimmed.startsWith('*');
}

export function isHiddenComment(line: string): boolean {
  return line.includes('// [comment hidden - yct:');
}

export function extractCommentId(line: string): string | null {
  const match = line.match(/\/\/ \[comment hidden - (yct:[a-zA-Z0-9_-]+)\]/);
  return match ? match[1] : null;
}

export function createHiddenMarker(commentId: string): string {
  return `// [comment hidden - ${commentId}]`;
}

export function findMultiLineComment(lines: string[], startIndex: number): { commentLines: string[], endIndex: number } {
  const commentLines: string[] = [];
  let currentIndex = startIndex;
  
  // Add the first line (which should be @dev: or @hideable:)
  commentLines.push(lines[currentIndex]);
  currentIndex++;
  
  // Continue adding comment lines until we hit a non-comment line
  while (currentIndex < lines.length) {
    const line = lines[currentIndex];
    const trimmed = line.trim();
    
    // Stop if it's not a comment line
    if (!isCommentLine(line) && trimmed !== '') {
      break;
    }
    
    // Add the comment line
    commentLines.push(line);
    currentIndex++;
  }
  
  return { commentLines, endIndex: currentIndex - 1 };
}

export function loadCommentCache(): CommentCache {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const content = fs.readFileSync(CACHE_FILE, 'utf-8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.warn('Warning: Could not load comment cache file');
  }
  return {};
}

export function saveCommentCache(cache: CommentCache): void {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
  } catch (error) {
    throw new Error(`Failed to save comment cache: ${error}`);
  }
}

export function readFileLines(filePath: string): string[] {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content.split('\n');
  } catch (error) {
    throw new Error(`Failed to read file ${filePath}: ${error}`);
  }
}

export function writeFileLines(filePath: string, lines: string[]): void {
  try {
    fs.writeFileSync(filePath, lines.join('\n'));
  } catch (error) {
    throw new Error(`Failed to write file ${filePath}: ${error}`);
  }
}

export function fileExists(filePath: string): boolean {
  return fs.existsSync(filePath);
}

export function getRelativePath(filePath: string): string {
  return path.relative(process.cwd(), filePath);
} 