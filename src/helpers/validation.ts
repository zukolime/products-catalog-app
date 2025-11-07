import * as Yup from 'yup';

export const validationSchema = Yup.object({
  title: Yup.string().required('Title is required').min(3, 'Minimum 3 characters'),
  description: Yup.string().required('Description is required').min(10, 'Minimum 10 characters'),
  thumbnail: Yup.string().url('Enter a valid URL').required('Image URL is required'),
  price: Yup.number().positive('Price shall be positive number').required('Price is required'),
  brand: Yup.string().required('Brand name is required').min(1, 'Minimum 1 character'),
});
