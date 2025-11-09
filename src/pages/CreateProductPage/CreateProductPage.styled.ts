import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 16px auto;
`;

export const FormContainer = styled(Form)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
`;

export const FormTitle = styled.h2`
  font-size: clamp(24px, 4vw, 32px);
`;

export const FormFieldBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 16px;
  color: #777;
  background: #fff;
  padding: 0 4px;
  transform: translate(10px, 50%);
  transition: transform 0.3s ease;
`;

export const FormField = styled(Field)`
  padding: 12px 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 16px;

  &:focus {
    border-color: #ff5572;
    box-shadow: 0 0 6px rgba(255, 85, 114, 0.3);
  }

  &:focus-visible + label,
  &:not(:placeholder-shown) + label {
    transform: translate(10px, -50%);
    font-size: 12px;
  }
`;

export const FormButton = styled.button`
  background-color: #ff5572;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const FormErrorMessage = styled(ErrorMessage)`
  font-size: 14px;
  font-style: italic;
  padding: 4px 0 0 8px;
  color: #f00000;
`;

export const FormSuccessMessage = styled.div`
  margin-top: 16px;
  padding: 10px;
  background-color: #e8f5e9;
  border: 1px solid #4caf50;
  border-radius: 5px;
  color: #2e7d32;
  text-align: center;
`;
