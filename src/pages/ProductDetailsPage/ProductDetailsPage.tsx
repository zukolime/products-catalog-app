import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { AppDispatch, RootState } from '../../app/providers/with-store';

import { useEffect } from 'react';
import { fetchProductById } from '../../features/productSlice';
import {
  ProductWrapper,
  ProductImageBox,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductAddInfo,
  ProductAddInfoBox,
  ProductLinkBack,
} from './ProductDetailsPage.styled';

export const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { product, loading } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p>Loading</p>;

  return (
    <>
      <ProductWrapper>
        <ProductImageBox>
          <ProductImage
            src={product.thumbnail || undefined}
            alt={product.title}
          />
        </ProductImageBox>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductAddInfoBox>
          <ProductAddInfo>$ {product.price}</ProductAddInfo>
          <ProductAddInfo>Brand: {product.brand}</ProductAddInfo>
        </ProductAddInfoBox>
      </ProductWrapper>
      <ProductLinkBack to='/products'> ← Back </ProductLinkBack>
    </>
  );
};
