export interface PostMeta {
  title: string;
  date: string;
  tags?: string[];
  heroImage?: string;
  description?: string;
}

export interface Post {
  content: string;
  slug: string[];
  meta: PostMeta;
}
