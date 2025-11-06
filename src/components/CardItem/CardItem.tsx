import type { Product } from '../../models/product';

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
        <CardDescription>{product.description}</CardDescription>
      </CardLink>
      {/* <button onClick={handleToggleLike}>{product.liked ? '❤️ UNLIKE' : '🤍 LIKE'}</button> */}
    </CardWrapper>
  );
};
