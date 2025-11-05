import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background: #ffffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
`;

export const HeaderTitle = styled.h1``;

export const HeaderLinkWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.625rem, 0.125rem + 2.5vw, 3.125rem);
`;

export const HeaderNavLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  position: relative;

  &.active {
    color: #ff5572;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 2px;
    width: 0%;
    background: #ff5572;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;
