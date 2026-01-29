import { notFound } from "next/navigation";
import Link from "next/link";
import { getPages, getPageBySlug } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const pages = getPages();
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return { title: "Page not found" };
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wealthos.in";
  const url = `${siteUrl}/pages/${slug}`;
  const image = page.frontMatter.image
    ? `${siteUrl}${page.frontMatter.image.startsWith("/") ? "" : "/"}${page.frontMatter.image}`
    : undefined;
  return {
    title: page.frontMatter.title,
    description: page.frontMatter.description,
    openGraph: {
      title: page.frontMatter.title,
      description: page.frontMatter.description,
      url,
      type: "website",
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: page.frontMatter.title,
      description: page.frontMatter.description,
    },
  };
}

export default async function PageBySlug({ params }: Props) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) notFound();

  const html = markdownToHtml(page.content);

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8">
        <Link href="/" className="text-primary hover:underline text-sm mb-4 inline-block">
          ← Home
        </Link>
        <h1 className="text-3xl font-bold text-foreground">{page.frontMatter.title}</h1>
      </header>
      <div
        className="prose-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
