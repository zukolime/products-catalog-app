import type { Product } from '../../models/product';
import { CardControls } from '../CardControls/CardControls';

import { CardWrapper, CardLink, CardImageBox, CardImage, CardTitle, CardDescription } from './CardItem.styled';

interface CardItemProps {
  product: Product;
}

export const CardItem = ({ product }: CardItemProps) => {
  return (
    <CardWrapper>
      <CardLink to={`/products/${product.id}`}>
        <CardImageBox>
          <CardImage
            src={product.thumbnail}
            alt={product.title}
          />
        </CardImageBox>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{`${product.description.slice(0, 120)}...`}</CardDescription>
      </CardLink>
      <CardControls
        id={product.id}
        liked={product.liked}
      />
    </CardWrapper>
  );
};
