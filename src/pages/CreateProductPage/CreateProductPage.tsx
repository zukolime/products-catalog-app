import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { addProduct } from '../../features/productsSlice';
import type { AppDispatch } from '../../app/providers/with-store';
import {
  FormWrapper,
  FormTitle,
  FormFieldBox,
  FormLabel,
  FormButton,
  FormErrorMessage,
  FormSuccessMessage,
  FormField,
  FormContainer,
} from './CreateProductPage.styled';

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required').min(3, 'Minimum 3 characters'),
  description: Yup.string().required('Description is required').min(10, 'Minimum 10 characters'),
  thumbnail: Yup.string().url('Enter a valid URL').required('Image URL is required'),
  price: Yup.number().positive('Price shall be positive number').required('Price is required'),
  brand: Yup.string().required('Brand name is required').min(1, 'Minimum 1 character'),
});

const initialValues = {
  title: '',
  description: '',
  thumbnail: '',
  price: '',
  brand: '',
};

export const CreateProductPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');

  return (
    <FormWrapper>
      <FormTitle>Add New Product</FormTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(addProduct({ ...values, price: Number(values.price) }));

          resetForm();
          setSuccessMessage('✅ Product added successfully!');

          setTimeout(() => {
            setSuccessMessage('');
            navigate('/products');
          }, 2000);
        }}
      >
        {({ isSubmitting }) => (
          <FormContainer>
            <FormFieldBox>
              <FormField
                id='title'
                name='title'
                type='text'
                placeholder=' '
              />
              <FormLabel htmlFor='title'>Title</FormLabel>
              <FormErrorMessage
                name='title'
                component='div'
              />
            </FormFieldBox>

            <FormFieldBox>
              <FormField
                component='textarea'
                id='description'
                name='description'
                placeholder=' '
              />
              <FormLabel htmlFor='description'>Description</FormLabel>
              <FormErrorMessage
                name='description'
                component='div'
              />
            </FormFieldBox>

            <FormFieldBox>
              <FormField
                id='thumbnail'
                name='thumbnail'
                type='text'
                placeholder=' '
              />
              <FormErrorMessage
                name='thumbnail'
                component='div'
              />
              <FormLabel htmlFor='thumbnail'>Image URL</FormLabel>
            </FormFieldBox>

            <FormFieldBox>
              <FormField
                id='price'
                name='price'
                type='number'
                placeholder=' '
              />
              <FormLabel htmlFor='price'>Price</FormLabel>
              <FormErrorMessage
                name='price'
                component='div'
              />
            </FormFieldBox>

            <FormFieldBox>
              <FormField
                id='brand'
                name='brand'
                type='text'
                placeholder=' '
              />
              <FormErrorMessage
                name='brand'
                component='div'
              />
              <FormLabel htmlFor='brand'>Brand</FormLabel>
            </FormFieldBox>

            <FormButton
              type='submit'
              disabled={isSubmitting}
            >
              Add Product
            </FormButton>

            {successMessage && <FormSuccessMessage>{successMessage}</FormSuccessMessage>}
          </FormContainer>
        )}
      </Formik>
    </FormWrapper>
  );
};
