import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { RootState } from '../../app/providers/with-store';

import { ProductStyles as S } from './ProductDetailsPage.styled';
import { NotFound } from '../NotFound/NotFound';

export const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, products } = useSelector((state: RootState) => state.products);
  const product = products.find((product) => product.id === id);

  if (loading) return <p>Loading...</p>;

  if (!product) {
    return <NotFound></NotFound>;
  }

  return (
    <>
      <S.ProductWrapper>
        <S.ProductImageBox>
          <S.ProductImage
            src={product.thumbnail || undefined}
            alt={product.title}
          />
        </S.ProductImageBox>
        <S.ProductTitle>{product.title}</S.ProductTitle>
        <S.ProductDescription>{product.description}</S.ProductDescription>
        <S.ProductAddInfoBox>
          <S.ProductAddInfo>$ {product.price}</S.ProductAddInfo>
          <S.ProductAddInfo>Brand: {product.brand}</S.ProductAddInfo>
        </S.ProductAddInfoBox>
      </S.ProductWrapper>
      <S.ProductBackLink to='/products'> ← Back </S.ProductBackLink>
    </>
  );
};
