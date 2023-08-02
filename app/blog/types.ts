export interface PostMeta {
  title: string;
  date: string;
  tags?: string[];
  hero?: string;
  description?: string;
}

export interface Post {
  content: string;
  slug: string[];
  meta: PostMeta;
}
