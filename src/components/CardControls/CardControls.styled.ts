import styled from 'styled-components';

export const CardControlsWrapper = styled.div`
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
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff3864;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 85, 114, 0.3);
  }
`;
