import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  padding: 50px;
  margin: 15% auto;
  box-shadow: 0 0 12px 1px rgba(255, 85, 114, 0.2);
  border-radius: 12px;
  background: #fff;
`;

export const NotFoundTitle = styled.h2`
  font-size: 32px;
`;

export const NotFoundLink = styled(Link)`
  font-size: 18px;
`;
