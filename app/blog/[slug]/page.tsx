import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wealthos.in";
  const url = `${siteUrl}/blog/${slug}`;
  const image = post.frontMatter.image
    ? `${siteUrl}${post.frontMatter.image.startsWith("/") ? "" : "/"}${post.frontMatter.image}`
    : undefined;
  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description,
    openGraph: {
      title: post.frontMatter.title,
      description: post.frontMatter.description,
      url,
      type: "article",
      publishedTime: post.frontMatter.date,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontMatter.title,
      description: post.frontMatter.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8">
        <Link href="/blog" className="text-primary hover:underline text-sm mb-4 inline-block">
          ← Blog
        </Link>
        <h1 className="text-3xl font-bold text-foreground">{post.frontMatter.title}</h1>
        {post.frontMatter.date && (
          <time
            dateTime={post.frontMatter.date}
            className="text-muted-foreground mt-2 block"
          >
            {new Date(post.frontMatter.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
      </header>
      <div
        className="prose-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
