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
  background: #ffbd4a;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 16px;
  color: #0d0c3b;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ffbd4a')};
  }

  svg {
    animation: ${spin} 2s linear infinite;
  }
`;
