export interface CommentProperties {
  label: string;
  content: string;
  authorName: string;
  date: string;
  isEmailPublic: boolean;
  email?: string;
}
