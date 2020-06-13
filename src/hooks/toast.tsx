import React, { createContext, useContext, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

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
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
  getProcess(): boolean;
  setProcess(): void;
  getDictionary(): boolean;
  setDictionary(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);
  const [processView, setProcessView] = useState(false);
  const [dictionaryView, setDictionaryView] = useState(false);

  const addToast = useCallback(
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

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  const getProcess = useCallback(() => {
    return processView;
  }, [processView]);

  const setProcess = useCallback(() => {
    setProcessView(!processView);
  }, [processView]);

  const getDictionary = useCallback(() => {
    return dictionaryView;
  }, [dictionaryView]);

  const setDictionary = useCallback(() => {
    setDictionaryView(!dictionaryView);
  }, [dictionaryView]);

  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast,
        getProcess,
        setProcess,
        getDictionary,
        setDictionary,
      }}
    >
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
