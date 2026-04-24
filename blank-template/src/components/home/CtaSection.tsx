type CtaSectionProps = {
  discountText: string;
  title: string;
  ctaText: string;
  ctaHref: string;
  bgImage: string;
};

export default function CtaSection({ discountText, title, ctaText, ctaHref, bgImage }: CtaSectionProps) {
  return (
    <div className="cta-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cta-content bg-img background-overlay" style={{ backgroundImage: `url('${bgImage}')` }}>
              <div className="h-100 d-flex align-items-center justify-content-end">
                <div className="cta--text">
                  <h6>{discountText}</h6>
                  <h2>{title}</h2>
                  <a href={ctaHref} className="btn essence-btn">
                    {ctaText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
