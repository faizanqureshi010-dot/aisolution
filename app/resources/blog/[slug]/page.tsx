import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ContentSection } from '@/components/layouts/Sections';
import { Breadcrumb } from '@/components/ui/Layout';
import Footer from '@/components/Footer';
import { getPostBySlug } from '@/lib/blog';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Breadcrumb items={[{ label: 'Resources', href: '/resources' }, { label: 'Blog', href: '/resources/blog' }, { label: post.title }]} />
      <main id="main">
        <ContentSection>
          <article className="mx-auto max-w-[720px]">
            <div className="font-mono-label text-xs text-slate">{post.publishedAt}</div>
            <h1 className="font-display mt-3 text-h1">{post.title}</h1>
            <div className="mt-8 space-y-4 text-body text-ink">{post.body}</div>
          </article>
        </ContentSection>
      </main>
      <Footer />
    </>
  );
}
