import styled from 'styled-components';
import { Form } from '@unform/web';

export const FormStyled = styled(Form)`
  p {
    color: #ffbd4a;
    margin: 8px auto;
  }
`;

export const Section = styled.div`
  margin-top: 40px;

  > strong {
    color: #9dbbae;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color: #9dbbae;
  }
`;
