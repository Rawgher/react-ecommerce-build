import ProductCard from '../product-card/product-card.component';
import { CategoryPreviewContainer, CategoryTitleLink, CategoryGrid } from './category-preview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitleLink to={`/shop/${title}`}>{title.toUpperCase()}</CategoryTitleLink>
      </h2>
      <CategoryGrid>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryGrid>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
