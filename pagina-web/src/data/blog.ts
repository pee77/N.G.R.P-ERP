export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor.",
    image: "/img/bg-img/blog1.jpg",
    href: "/single-blog",
  },
  {
    id: "blog-2",
    title: "Donec vel fringilla ante. Aenean finibus velit id urna vehicula",
    excerpt:
      "Praesent at tempus lectus, eleifend blandit felis. Fusce augue arcu, consequat a nisl aliquet, consectetur elementum turpis.",
    image: "/img/bg-img/blog2.jpg",
    href: "/single-blog",
  },
  {
    id: "blog-3",
    title: "Nunc quis arcu a magna sodales venenatis integer non diam",
    excerpt:
      "In accumsan tellus ut dapibus blandit. Quisque sagittis non ex eget vestibulum sed nec ultrices dui.",
    image: "/img/bg-img/blog3.jpg",
    href: "/single-blog",
  },
  {
    id: "blog-4",
    title: "Praesent ac magna sed massa euismod congue vitae vitae risus",
    excerpt:
      "Nulla lorem augue, mollis non est et, eleifend elementum ante. Nunc id pharetra magna.",
    image: "/img/bg-img/blog4.jpg",
    href: "/single-blog",
  },
  {
    id: "blog-5",
    title: "Class aptent taciti sociosqu ad litora torquent per conubia",
    excerpt:
      "Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/img/bg-img/blog5.jpg",
    href: "/single-blog",
  },
  {
    id: "blog-6",
    title: "Cras et sagittis erat maecenas pulvinar turpis in dictum tincidunt",
    excerpt:
      "Dolor nibh lacinia lacus. Praesent vel orci ornare, blandit mi sed, aliquet nisi.",
    image: "/img/bg-img/blog6.jpg",
    href: "/single-blog",
  },
];

export const relatedPosts = [
  {
    id: "related-1",
    title: "Cras lobortis nisl nec libero pulvinar lacinia. Nunc sed ullamcorper massa",
    image: "/img/bg-img/rp1.jpg",
    href: "/single-blog",
  },
  {
    id: "related-2",
    title: "Fusce tincidunt nulla magna, ac euismod quam viverra id.",
    image: "/img/bg-img/rp2.jpg",
    href: "/single-blog",
  },
  {
    id: "related-3",
    title: "Etiam leo nibh, consectetur nec orci et, tempus tempus ex",
    image: "/img/bg-img/rp3.jpg",
    href: "/single-blog",
  },
  {
    id: "related-4",
    title: "Sed viverra pellentesque dictum. Aenean ligula justo, viverra in lacus.",
    image: "/img/bg-img/rp4.jpg",
    href: "/single-blog",
  },
];
