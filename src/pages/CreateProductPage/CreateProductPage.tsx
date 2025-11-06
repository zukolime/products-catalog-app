import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../features/productsSlice';
import type { AppDispatch } from '../../app/providers/with-store';

export const CreateProductPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required').min(3, 'Minimum 3 characters'),
    description: Yup.string().required('Description is required').min(10, 'Minimum 10 characters'),
    thumbnail: Yup.string().url('Enter a valid URL').required('Required'),
    price: Yup.number().positive('Price shall be positive number').required('Required'),
    brand: Yup.string().required('Required').min(1, 'Minimum 1 character'),
  });

  return (
    <Box
      maxWidth='500px'
      mx='auto'
      mt={5}
      p={3}
      borderRadius={2}
      boxShadow={3}
    >
      <Typography
        variant='h4'
        mb={3}
        textAlign='center'
      >
        Add New Product
      </Typography>

      <Formik
        initialValues={{
          title: '',
          description: '',
          thumbnail: '',
          price: 0,
          brand: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(addProduct(values));
          resetForm();
          navigate('/products');
        }}
      >
        {({ errors, touched, isSubmitting, handleChange, values }) => (
          <Form>
            <Box mb={2}>
              <TextField
                fullWidth
                label='Title'
                name='title'
                value={values.title}
                onChange={handleChange}
                error={touched.title && Boolean(errors.title)}
                helperText={touched.title && errors.title}
              />
            </Box>

            <Box mb={2}>
              <TextField
                fullWidth
                label='Description'
                name='description'
                value={values.description}
                onChange={handleChange}
                multiline
                rows={4}
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description && errors.description}
              />
            </Box>

            <Box mb={2}>
              <TextField
                fullWidth
                label='Image URL'
                name='imageURL'
                value={values.thumbnail}
                onChange={handleChange}
                error={touched.thumbnail && Boolean(errors.thumbnail)}
                helperText={touched.thumbnail && errors.thumbnail}
              />
            </Box>

            <Box mb={2}>
              <TextField
                fullWidth
                label='Price'
                name='price'
                value={values.price}
                onChange={handleChange}
                error={touched.price && Boolean(errors.price)}
                helperText={touched.price && errors.price}
              />
            </Box>

            <Box mb={2}>
              <TextField
                fullWidth
                label='Brand'
                name='brand'
                value={values.brand}
                onChange={handleChange}
                error={touched.brand && Boolean(errors.brand)}
                helperText={touched.brand && errors.brand}
              />
            </Box>

            <Button
              type='submit'
              variant='contained'
              color='secondary'
              fullWidth
              disabled={isSubmitting}
            >
              Add Product
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
