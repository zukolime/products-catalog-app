import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  margin: 15px auto;
  width: 80%;
  border-radius: 8px;
  gap: 18px;
  box-shadow: 0 0 12px 1px rgba(255, 85, 114, 0.2);
`;

export const ProductImageBox = styled.div`
  width: 420px;
`;

export const ProductImage = styled.img``;

export const ProductTitle = styled.h3`
  margin: 0;
  font-size: 32px;
`;

export const ProductDescription = styled.p`
  margin: 0;
  font-size: 24px;
  text-align: center;
`;

export const ProductAddInfoBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
`;

export const ProductAddInfo = styled.span`
  padding: 8px;
  background: #ff557252;
  border-radius: 8px;
`;

export const ProductLinkBack = styled(Link)`
  font-size: 24px;
  padding: 8px;
  border-radius: 8px;
`;
