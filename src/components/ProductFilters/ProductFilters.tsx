import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '../../app/providers/with-store';
import { setFilter } from '../../features/productsSlice';

import { FilterBtn, FilterWrapper } from './ProductFilters.styled';

export const ProductFilters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentFilter = useSelector((state: RootState) => state.products.filter);

  const handleFilterChange = (filter: 'all' | 'liked') => {
    dispatch(setFilter(filter));
  };

  return (
    <FilterWrapper>
      <FilterBtn
        $active={currentFilter === 'all'}
        onClick={() => handleFilterChange('all')}
      >
        All
      </FilterBtn>
      <FilterBtn
        $active={currentFilter === 'liked'}
        onClick={() => handleFilterChange('liked')}
      >
        Favorites
      </FilterBtn>
    </FilterWrapper>
  );
};
