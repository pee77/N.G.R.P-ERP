import { useState, useEffect } from "react";

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  ctaText: string;
  ctaHref: string;
  bgImages: string[];
};

export default function HeroSection({ eyebrow = "", title, ctaText, ctaHref, bgImages }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!bgImages || bgImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [bgImages]);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? bgImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % bgImages.length);
  };

  return (
    <section className="welcome_area background-overlay" style={{ position: 'relative', overflow: 'hidden', zIndex: 1, paddingBottom: '30px' }}>
      {bgImages && bgImages.map((img, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentImageIndex === index ? 0.6 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: -1,
            backgroundColor: '#0B1F33'
          }}
        />
      ))}
      <div className="container h-100" style={{ position: 'relative', zIndex: 2 }}>
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
      
      {/* Navigation Arrows */}
      {bgImages && bgImages.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              top: '50%',
              left: '20px',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 3,
              color: 'white',
              fontSize: '24px',
              transition: 'background 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              top: '50%',
              right: '20px',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 3,
              color: 'white',
              fontSize: '24px',
              transition: 'background 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            aria-label="Next slide"
          >
            &#10095;
          </button>
        </>
      )}

      {/* Pagination Dots */}
      {bgImages && bgImages.length > 1 && (
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: 3
        }}>
          {bgImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: currentImageIndex === index ? '#0EA5A4' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                padding: 0
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
