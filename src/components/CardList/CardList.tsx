import { useDispatch, useSelector } from 'react-redux';
import { CardItem } from '../CardItem/CardItem';
import { CardListWrapper } from './CardList.styled';
import { fetchProducts } from '../../features/productsSlice';
import { useEffect } from 'react';

import type { Product } from '../../models/product';
import type { AppDispatch, RootState } from '../../app/providers/with-store';

export const CardList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CardListWrapper>
      {products.map((product: Product) => (
        <CardItem
          key={product.id}
          product={product}
        />
      ))}
    </CardListWrapper>
  );
};
