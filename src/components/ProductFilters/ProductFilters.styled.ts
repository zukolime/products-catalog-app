import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  gap: 8px;
`;
export const FilterBtn = styled.button<{ $active: boolean }>`
  background-color: ${({ $active }) => ($active ? '#ff5572' : '#fbbfbfff')};
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff5572;
  }
`;
