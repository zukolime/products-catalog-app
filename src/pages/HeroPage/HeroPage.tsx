import { HeroWrapper, HeroTitle, HeroText, HeroLinkWrapper, HeroLink } from './HeroPage.styled';

export const HeroPage = () => {
  return (
    <HeroWrapper>
      <HeroTitle>HELLO!</HeroTitle>
      <HeroText>Welcome to our cosmetic products catalog</HeroText>
      <HeroLinkWrapper>
        <HeroLink to='/products'>Browse all products</HeroLink>
        <HeroLink to='/create-product'>Add a new product</HeroLink>
      </HeroLinkWrapper>
    </HeroWrapper>
  );
};
