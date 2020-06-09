import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  transition: 0.2s;

  @media (max-width: 710px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 500px;
  transition: 0.2s;

  @media (max-width: 700px) {
    flex: 1;
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1.8s;

  img {
    width: 150px;
    height: 150px;
  }

  form {
    margin: 30px 0;
    width: 340px;
    text-align: center;

    @media (max-width: 400px) {
      width: 100%;
      justify-content: center;
    }

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ffbd4a;
    display: block;
    margin-top: 24px;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ffbd4a')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
  transition: 0.2s;

  animation: ${appearFromRight} 2s;

  @media (max-width: 710px) {
    flex: 0;
  }
`;
