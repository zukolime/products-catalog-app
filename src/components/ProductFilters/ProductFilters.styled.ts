import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  gap: 8px;
`;

export const FilterBtn = styled.button`
  background-color: #ff5572;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
