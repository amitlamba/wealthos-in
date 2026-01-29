import Link from "next/link";
import { getBlogPosts } from "@/lib/content";

export const metadata = {
  title: "Blog",
  description: "Wealth OS blog — updates, tips, and product news.",
};

export default function BlogListPage() {
  const posts = getBlogPosts();

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-foreground">Blog</h1>
        <p className="mt-2 text-muted-foreground">
          Updates, tips, and product news from the Wealth OS team.
        </p>
      </header>

      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block group">
              <h2 className="text-xl font-semibold text-foreground group-hover:text-primary">
                {post.frontMatter.title}
              </h2>
              {post.frontMatter.date && (
                <time
                  dateTime={post.frontMatter.date}
                  className="text-sm text-muted-foreground mt-1 block"
                >
                  {new Date(post.frontMatter.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              )}
              <p className="mt-2 text-muted-foreground">{post.frontMatter.description}</p>
            </Link>
          </li>
        ))}
      </ul>

      {posts.length === 0 && (
        <p className="text-muted-foreground">No posts yet. Check back soon.</p>
      )}
    </article>
  );
}
