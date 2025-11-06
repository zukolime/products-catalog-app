import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardWrapper = styled.li`
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 0 12px 1px rgba(237, 237, 237, 2.1);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 12px 1px rgba(255, 85, 114, 0.2);
  }
`;

export const CardLink = styled(Link)`
  display: block;
`;

export const CardImageBox = styled.div`
  margin: auto;
  width: 220px;
`;

export const CardImage = styled.img``;

export const CardTitle = styled.h3``;

export const CardDescription = styled.p``;

export const CardControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardControl = styled.button`
  padding: 8px;
  background: #ff557252;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
