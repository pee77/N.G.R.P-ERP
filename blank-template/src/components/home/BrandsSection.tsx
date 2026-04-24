
type BrandsSectionProps = {
  brands: string[];
};

export default function BrandsSection({ brands }: BrandsSectionProps) {
  return (
    <div className="brands-area d-flex align-items-center justify-content-between">
      {brands.map((brand) => (
        <div className="single-brands-logo" key={brand}>
          <img src={brand} alt="Brand logo" width={180} height={80} />
        </div>
      ))}
    </div>
  );
}
