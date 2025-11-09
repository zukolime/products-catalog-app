import styled from 'styled-components';

export const CardListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  padding: 16px;
  border-radius: 12px;
  background-color: #fff;
  list-style-type: none;

  @media (width < 380px) {
    grid-template-columns: 1fr;
  }
`;
