import { marked } from "marked";

marked.use({
  gfm: true,
  breaks: true,
  renderer: {
    link(token: { href: string; title?: string | null; text: string }) {
      const { href, title, text } = token;
      const t = title ? ` title="${title}"` : "";
      return `<a href="${href}"${t} class="text-primary underline hover:no-underline">${text}</a>`;
    },
  },
});

export function markdownToHtml(md: string): string {
  return marked.parse(md) as string;
}
