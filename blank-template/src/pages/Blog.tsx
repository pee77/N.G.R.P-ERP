import BlogGrid from "@/components/blog/BlogGrid";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog",
  description: "Read style guides, fashion updates, and seasonal trends from Essence.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <main>
      <BlogGrid posts={blogPosts} />
    </main>
  );
}
