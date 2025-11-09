import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import type { AppDispatch } from '../app/providers/with-store';
import { addProduct } from '../features/productsSlice';
import type { ProductFormValues } from '../models/product';

export const useProductForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (values: ProductFormValues, resetForm: () => void) => {
    dispatch(addProduct({ ...values, price: Number(values.price) }));
    resetForm();
    setSuccessMessage('✅ Product added successfully!');

    const timer = setTimeout(() => {
      setSuccessMessage('');
      navigate('/products');
    }, 2000);

    return () => clearTimeout(timer);
  };

  return { handleSubmit, successMessage };
};
