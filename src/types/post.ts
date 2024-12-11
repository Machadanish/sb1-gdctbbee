export interface Post {
  id: string;
  title: string;
  content: string;
  type: 'incident' | 'safety';
  author: string;
  date: string;
  imageUrl?: string;
}