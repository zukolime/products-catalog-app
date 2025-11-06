import { HeaderLinkWrapper, HeaderNavLink, HeaderTitle, HeaderWrapper } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle to='/products'>My Products App</HeaderTitle>
      <HeaderLinkWrapper>
        <HeaderNavLink to='/products'>Products</HeaderNavLink>
        <HeaderNavLink to='/create-product'>Create Product</HeaderNavLink>
      </HeaderLinkWrapper>
    </HeaderWrapper>
  );
};
