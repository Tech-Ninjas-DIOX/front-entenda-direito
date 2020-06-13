import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ToastModalProvider } from './toastModal';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastModalProvider>
      <ToastProvider>{children}</ToastProvider>
    </ToastModalProvider>
  </AuthProvider>
);

export default AppProvider;
