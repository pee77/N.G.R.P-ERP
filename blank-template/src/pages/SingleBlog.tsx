import SingleBlogContent from "@/components/blog/SingleBlogContent";
import { relatedPosts } from "@/data/blog";

export const metadata = {
  title: "Single Blog",
  description: "Read the full article and discover related stories from Essence blog.",
  alternates: {
    canonical: "/single-blog",
  },
};

export default function SingleBlogPage() {
  return (
    <main>
      <SingleBlogContent relatedPosts={relatedPosts} />
    </main>
  );
}
