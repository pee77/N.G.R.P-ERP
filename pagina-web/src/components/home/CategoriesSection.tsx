import type { Category } from "@/types/commerce";

type CategoriesSectionProps = {
  categories: Category[];
};

export default function CategoriesSection({ categories }: CategoriesSectionProps) {
  return (
    <div className="top_catagory_area section-padding-80 clearfix">
      <div className="container">
        <div className="row justify-content-center">
          {categories.map((category) => (
            <div className="col-12 col-sm-6 col-md-4" key={category.name}>
              <div
                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                style={{ backgroundImage: `url('${category.image}')` }}
              >
                <div className="catagory-content">
                  <a href={category.href}>{category.name}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
