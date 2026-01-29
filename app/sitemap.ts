import { MetadataRoute } from "next";
import { getBlogPosts, getPages } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wealthos.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getBlogPosts();
  const pages = getPages();

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.frontMatter.date
      ? new Date(post.frontMatter.date)
      : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const pageEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${siteUrl}/pages/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogEntries,
    ...pageEntries,
  ];
}
