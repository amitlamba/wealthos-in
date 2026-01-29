import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface FrontMatter {
  title: string;
  description: string;
  slug?: string;
  date?: string;
  image?: string;
}

export interface ContentItem {
  slug: string;
  frontMatter: FrontMatter;
  content: string;
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

export function getBlogPosts(): ContentItem[] {
  const blogDir = path.join(contentDir, "blog");
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir).filter((f) => /\.mdx?$/.test(f));
  const posts = files.map((filename) => {
    const fullPath = path.join(blogDir, filename);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);
    const slug = (data.slug as string) ?? getSlugFromFilename(filename);
    return {
      slug,
      frontMatter: data as FrontMatter,
      content,
    };
  });
  posts.sort((a, b) => {
    const dateA = a.frontMatter.date ?? "";
    const dateB = b.frontMatter.date ?? "";
    return dateB.localeCompare(dateA);
  });
  return posts;
}

export function getBlogPostBySlug(slug: string): ContentItem | null {
  const posts = getBlogPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

export function getPages(): ContentItem[] {
  const pagesDir = path.join(contentDir, "pages");
  if (!fs.existsSync(pagesDir)) return [];
  const files = fs.readdirSync(pagesDir).filter((f) => /\.mdx?$/.test(f));
  return files.map((filename) => {
    const fullPath = path.join(pagesDir, filename);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);
    const slug = (data.slug as string) ?? getSlugFromFilename(filename);
    return {
      slug,
      frontMatter: data as FrontMatter,
      content,
    };
  });
}

export function getPageBySlug(slug: string): ContentItem | null {
  const pages = getPages();
  return pages.find((p) => p.slug === slug) ?? null;
}

export function getAllContentSlugs(): { blog: string[]; pages: string[] } {
  return {
    blog: getBlogPosts().map((p) => p.slug),
    pages: getPages().map((p) => p.slug),
  };
}
