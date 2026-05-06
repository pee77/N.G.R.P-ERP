
export default function RegularPageContent() {
  return (
    <div className="single-blog-wrapper">
      <div className="single-blog-post-thumb">
        <img src="/img/bg-img/bg-8.jpg" alt="Regular page cover" width={1200} height={700} />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="regular-page-content-wrapper section-padding-80">
              <div className="regular-page-text">
                <h2>Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada</h2>
                <p>
                  Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna
                  vehicula, nec maximus est sollicitudin. Praesent at tempus lectus, eleifend blandit felis.
                </p>

                <blockquote>
                  <h6>
                    <i className="fa fa-quote-left" aria-hidden="true" /> Quisque sagittis non ex eget vestibulum. Sed
                    nec ultrices dui. Cras et sagittis erat.
                  </h6>
                  <span>Liam Neeson</span>
                </blockquote>

                <p>
                  Praesent ac magna sed massa euismod congue vitae vitae risus. Nulla lorem augue, mollis non est et,
                  eleifend elementum ante. Nunc id pharetra magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
