export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  body: string;
}

// Intentionally empty — no fabricated posts. Real posts are added here as they're written.
export const blogPosts: BlogPost[] = [];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
