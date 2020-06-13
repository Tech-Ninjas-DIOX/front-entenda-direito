import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainerModal from '../components/ToastContainerModal';

export interface ToastMessage {
  id: string;
  type?: 'info' | 'success' | 'error';
  title: string;
  description?: string;
}

export interface Mostrar {
  mostrar: boolean;
}

interface ToastContextData {
  addModal(message: Omit<ToastMessage, 'id'>): void;
  removeModal(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastModalProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addModal = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages((oldMessages) => [...oldMessages, toast]);
    },
    [],
  );

  const removeModal = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addModal, removeModal }}>
      {children}
      <ToastContainerModal messages={messages} />
    </ToastContext.Provider>
  );
};

export function useModal(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useModal must be used within a ToastModalProvider');
  }

  return context;
}
