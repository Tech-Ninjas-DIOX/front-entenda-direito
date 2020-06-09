import React, { ButtonHTMLAttributes } from 'react';
import { FiLoader } from 'react-icons/fi';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? <FiLoader size={28}> Carregando... </FiLoader> : children}
  </Container>
);

export default Button;
