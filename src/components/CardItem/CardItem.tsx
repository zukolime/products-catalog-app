import type { Product } from '../../models/product';
import { removeProduct, toggleLike } from '../../features/productsSlice';

import { CardWrapper, CardLink, CardImageBox, CardImage, CardTitle, CardDescription, CardControls, CardControl } from './CardItem.styled';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../app/providers/with-store';

interface CardItemProps {
  product: Product;
}

export const CardItem = ({ product }: CardItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleToggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleLike(product.id));
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(removeProduct(product.id));
  };

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
      <CardControls>
        <CardControl onClick={handleToggleLike}>{product.liked ? '❤️ UNLIKE' : '🤍 LIKE'}</CardControl>
        <CardControl onClick={handleRemove}>🗑️ DELETE</CardControl>
      </CardControls>
    </CardWrapper>
  );
};
