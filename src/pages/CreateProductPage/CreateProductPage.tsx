import { Formik, type FormikHelpers } from 'formik';

import { validationSchema } from '../../helpers/validation';
import { ProductFormField } from '../../components/ProductFormField/ProductFormField';
import type { ProductFormValues } from '../../models/product';
import { formFields } from './formConfig';

import { FormWrapper, FormTitle, FormButton, FormSuccessMessage, FormContainer } from './CreateProductPage.styled';
import { useProductForm } from '../../hooks/useProductForm';

const initialValues: ProductFormValues = {
  title: '',
  description: '',
  thumbnail: '',
  price: '',
  brand: '',
};

export const CreateProductPage = () => {
  const { handleSubmit, successMessage } = useProductForm();

  const onSubmitForm = (values: ProductFormValues, { resetForm }: FormikHelpers<ProductFormValues>) => {
    handleSubmit(values, resetForm);
  };

  return (
    <FormWrapper>
      <FormTitle>Add New Product</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitForm}
      >
        {({ isSubmitting }) => (
          <FormContainer>
            {formFields.map(({ name, label, type }) => (
              <ProductFormField
                key={name}
                name={name}
                label={label}
                type={type}
              />
            ))}
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
