import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0, 8, 0, 0.5);
  z-index: 10000;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 50%;
  min-width: 240px;
  padding: 40px;
  box-shadow: 0 0 0 5px #161032;
  background-color: #161032;
  border: 2px solid #ffbd4a;
  position: relative;
  border-radius: 50px 0 50px 50px;

  > li {
    list-style: none;
    margin-top: 24px;

    div {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;

      strong {
        margin-right: 8px;
      }

      span {
        margin: 0;
      }
    }

    p {
      text-align: center;
      margin: 8px 0;
    }

    span {
      margin-top: 8px;
    }
  }

  animation: modal 0.3s;

  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -60px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const Dismiss = styled.button`
  position: absolute;
  top: -30px;
  right: -30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid #ffbd4a;
  font-size: 1.2em;
  background-color: white;
  color: black;
  cursor: pointer;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
  outline: none;

  &:hover {
    color: #ff0000;
    cursor: pointer;
  }
`;
