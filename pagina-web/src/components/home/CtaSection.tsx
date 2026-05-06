type CtaSectionProps = {
  discountText: string;
  title: string;
  ctaText: string;
  ctaHref: string;
  bgImage: string;
  opacity?: number;
};

export default function CtaSection({ discountText, title, ctaText, ctaHref, bgImage, opacity }: CtaSectionProps) {
  return (
    <div className="cta-area" style={{ position: 'relative', overflow: 'hidden' }}>
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: opacity ?? 1,
          zIndex: -1,
          backgroundColor: '#0B1F33'
        }}
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cta-content" style={{ background: 'transparent' }}>
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
