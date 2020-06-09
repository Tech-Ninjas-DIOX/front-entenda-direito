import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
  from {
    transform: rotate(0deg);
  }
`;

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }

  svg {
    animation: ${spin} 2s linear infinite;
  }
`;
