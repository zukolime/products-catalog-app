import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductStyles = {
  ProductWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: clamp(14px, 2vw, 32px);
    margin: 16px auto;
    width: 80%;
    border-radius: 8px;
    gap: 18px;
    box-shadow: 0 0 12px 1px rgba(255, 85, 114, 0.2);

    @media (width < 420px) {
      width: 100%;
    }
  `,

  ProductImageBox: styled.div`
    width: clamp(200px, 50%, 380px);
  `,

  ProductImage: styled.img``,

  ProductTitle: styled.h3`
    margin: 0;
    text-align: center;
    font-size: clamp(24px, 4vw, 32px);
  `,

  ProductDescription: styled.p`
    margin: 0;
    font-size: clamp(16px, 2vw, 24px);
    text-align: center;
  `,

  ProductAddInfoBox: styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-size: font-size: clamp(14px, 2vw, 18px);
  `,

  ProductAddInfo: styled.span`
    padding: 8px;
    background: #ff557252;
    border-radius: 8px;
  `,

  ProductBackLink: styled(Link)`
    font-size: clamp(16px, 4vw, 24px);
    padding: 8px;
    border-radius: 8px;
  `,
};
