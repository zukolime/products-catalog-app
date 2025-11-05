import { useDispatch, useSelector } from 'react-redux';
import { CardItem } from '../CardItem/CardItem';
import { CardListWrapper } from './CardList.styled';
import { fetchData } from '../../app/api/api';
import { setProducts } from '../../features/productsSlice';
import { useEffect } from 'react';
import type { Product } from '../../models/product';
import type { RootState } from '../../app/providers/with-store';

export const CardList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);

  useEffect(() => {
    if (products.length === 0) {
      const loadProducts = async () => {
        const data = await fetchData();
        dispatch(setProducts(data));
      };
      loadProducts();
    }
  }, [dispatch, products.length]);

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
