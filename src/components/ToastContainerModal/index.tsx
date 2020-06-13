import React from 'react';
import { useTransition } from 'react-spring';

import { ToastMessage } from '../../hooks/toastModal';
import ToastModal from './ToastModal';

import { Container } from './styles';

interface ToastContainerModalProps {
  messages: ToastMessage[];
}

const ToastContainerModal: React.FC<ToastContainerModalProps> = ({
  messages,
}) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0, transform: 'rotateZ(0deg)' },
      enter: { right: '0%', opacity: 1, transform: 'rotateZ(360deg)' },
      leave: { right: '-120%', opacity: 0, transform: 'rotateZ(0deg)' },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <ToastModal key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainerModal;
