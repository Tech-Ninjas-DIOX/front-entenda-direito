import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiInfo,
  FiCheckCircle,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useModal } from '../../../hooks/toastModal';

import { Container } from './styles';

interface ToastModalProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  success: <FiCheckCircle size={24} />,
  error: <FiAlertCircle size={24} />,
};

const ToastModal: React.FC<ToastModalProps> = ({ message, style }) => {
  const { removeModal } = useModal();

  return (
    <Container
      type={message.type}
      hasdescription={Number(!!message.description)}
      style={style}
    >
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button type="button" onClick={() => removeModal(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default ToastModal;
