export interface CommentProperties {
  id: number;
  label: string;
  content: string;
  authorName: string;
  date: string;
  email?: string;
  isEmailPublic?: boolean;
}
