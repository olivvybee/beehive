interface PostMeta {
  title: string;
  date: string;
  tags?: string[];
  heroImage?: string;
  description?: string;
}

interface Post {
  Content: React.ComponentType;
  slug: string[];
  meta: PostMeta;
}
