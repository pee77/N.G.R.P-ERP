type HeroSectionProps = {
  eyebrow: string;
  title: string;
  ctaText: string;
  ctaHref: string;
  bgImage: string;
};

export default function HeroSection({ eyebrow, title, ctaText, ctaHref, bgImage }: HeroSectionProps) {
  return (
    <section className="welcome_area bg-img background-overlay" style={{ backgroundImage: `url('${bgImage}')` }}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <div className="hero-content">
              <h6>{eyebrow}</h6>
              <h2>{title}</h2>
              <a href={ctaHref} className="btn essence-btn">
                {ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
