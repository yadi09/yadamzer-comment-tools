export interface CommentCache {
  [filePath: string]: {
    [commentId: string]: string;
  };
}

export interface HiddenComment {
  id: string;
  originalComment: string;
  lineNumber: number;
}

export interface HideOptions {
  filePath: string;
  lineNumber?: number;
  force?: boolean;
}

export interface UnhideOptions {
  filePath: string;
  lineNumber?: number;
  commentId?: string;
  force?: boolean;
} 