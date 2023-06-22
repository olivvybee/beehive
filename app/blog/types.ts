interface PostMeta {
  title: string;
  date: string;
  tags?: string[];
}

interface Post {
  Content: React.ComponentType;
  slug: string[];
  meta: PostMeta;
}
