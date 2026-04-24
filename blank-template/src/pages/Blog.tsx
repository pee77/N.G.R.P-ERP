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
      <div
        className="breadcumb_area breadcumb-style-two bg-img"
        style={{ backgroundImage: "url('/img/bg-img/breadcumb2.jpg')" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Fashion Blog</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BlogGrid posts={blogPosts} />
    </main>
  );
}
