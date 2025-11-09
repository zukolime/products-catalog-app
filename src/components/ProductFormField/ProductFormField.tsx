import { FormErrorMessage, FormField, FormFieldBox, FormLabel } from '../../pages/CreateProductPage/CreateProductPage.styled';

interface ProductFormFieldProps {
  name: string;
  label: string;
  type?: string;
}

export const ProductFormField = ({ name, label, type = 'text' }: ProductFormFieldProps) => (
  <FormFieldBox>
    <FormField
      id={name}
      name={name}
      type={type !== 'textarea' ? type : undefined}
      component={type === 'textarea' ? 'textarea' : undefined}
      placeholder=' '
    />
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <FormErrorMessage
      name={name}
      component='div'
    />
  </FormFieldBox>
);
