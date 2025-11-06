import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { AppDispatch, RootState } from '../../app/providers/with-store';

import { useEffect } from 'react';
import { fetchProductById } from '../../features/productSlice';

export const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { product } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [id, dispatch]);

  return (
    <div>
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
        />
      </div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
};
