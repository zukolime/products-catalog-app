import { useDispatch, useSelector } from 'react-redux';
import { CardItem } from '../CardItem/CardItem';
import { CardListWrapper } from './CardList.styled';
import { fetchProducts } from '../../features/productsSlice';
import { useEffect } from 'react';

import type { Product } from '../../models/product';
import type { AppDispatch, RootState } from '../../app/providers/with-store';
import { ProductFilters } from '../ProductFilters/ProductFilters';

export const CardList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, filter, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredProducts = filter === 'liked' ? products.filter((p) => p.liked) : products;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <ProductFilters />
      <CardListWrapper>
        {filteredProducts.map((product: Product) => (
          <CardItem
            key={product.id}
            product={product}
          />
        ))}
      </CardListWrapper>
    </>
  );
};
