import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 15px auto;
  height: 80vh;
  box-shadow: 0 0 20px 2px rgba(255, 85, 114, 0.2);
  border-radius: 16px;
`;

export const HeroTitle = styled.h2`
  font-size: 48px;
  margin: 0;
  color: #ff5572;
  font-weight: 700;
`;

export const HeroText = styled.p`
  font-size: 24px;
  margin: 0;
  color: #333;
`;

export const HeroLinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const HeroLink = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background-color: #ff5572;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff3864;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 85, 114, 0.3);
  }
`;
