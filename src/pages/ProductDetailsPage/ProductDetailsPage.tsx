import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { RootState } from '../../app/providers/with-store';

import { NotFound } from '../NotFound/NotFound';
import { ErrorMsg } from '../../components/ErrorMsg/ErrorMsg';
import { Spinner } from '../../components/Spinner/Spinner';

import { ProductStyles as S } from './ProductDetailsPage.styled';

export const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { products, loading, error } = useSelector((state: RootState) => state.products);
  const product = products.find((product) => String(product.id) === id);

  if (loading) return <Spinner />;

  if (error) return <ErrorMsg />;

  if (!product) {
    return <NotFound />;
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
