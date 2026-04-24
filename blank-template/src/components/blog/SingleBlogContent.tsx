import { Link } from "react-router-dom";

type RelatedPost = {
  id: string;
  title: string;
  image: string;
  href: string;
};

type SingleBlogContentProps = {
  relatedPosts: RelatedPost[];
};

export default function SingleBlogContent({ relatedPosts }: SingleBlogContentProps) {
  return (
    <div className="single-blog-wrapper">
      <div className="single-blog-post-thumb">
        <img src="/img/bg-img/bg-7.jpg" alt="Blog cover" width={1200} height={700} />
      </div>

      <div className="single-blog-content-wrapper d-flex">
        <div className="single-blog--text">
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis perferendis rem accusantium ducimus
            animi nesciunt expedita omnis aut quas molestias!
          </h2>
          <p>
            Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna
            vehicula, nec maximus est sollicitudin. Praesent at tempus lectus, eleifend blandit felis.
          </p>

          <blockquote>
            <h6>
              <i className="fa fa-quote-left" aria-hidden="true" /> Quisque sagittis non ex eget vestibulum. Sed nec
              ultrices dui. Cras et sagittis erat.
            </h6>
            <span>Liam Neeson</span>
          </blockquote>

          <p>
            Praesent ac magna sed massa euismod congue vitae vitae risus. Nulla lorem augue, mollis non est et,
            eleifend elementum ante. Nunc id pharetra magna.
          </p>
        </div>

        <div className="related-blog-post">
          {relatedPosts.map((post) => (
            <div className="single-related-blog-post" key={post.id}>
              <img src={post.image} alt={post.title} width={420} height={280} />
              <Link to={post.href}>
                <h5>{post.title}</h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
