import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/blog";

type BlogGridProps = {
  posts: BlogPost[];
};

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="blog-wrapper section-padding-80">
      <div className="container">
        <div className="row">
          {posts.map((post) => (
            <div className="col-12 col-lg-6" key={post.id}>
              <div className="single-blog-area mb-50">
                <img src={post.image} alt={post.title} width={800} height={520} />
                <div className="post-title">
                  <Link to={post.href}>{post.title}</Link>
                </div>
                <div className="hover-content">
                  <div className="hover-post-title">
                    <Link to={post.href}>{post.title}</Link>
                  </div>
                  <p>{post.excerpt}</p>
                  <Link to={post.href}>
                    Continue reading <i className="fa fa-angle-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
