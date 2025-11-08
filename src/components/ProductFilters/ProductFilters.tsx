import { FilterBtn, FilterWrapper } from './ProductFilters.styled';

export const ProductFilters = () => {
  return (
    <FilterWrapper>
      <FilterBtn value={'All'}>All</FilterBtn>
      <FilterBtn value={'Liked'}>Favorites</FilterBtn>
    </FilterWrapper>
  );
};
