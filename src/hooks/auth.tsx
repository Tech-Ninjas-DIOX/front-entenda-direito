import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface User {
  id: string;
  avatar_url?: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredencials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const teste = {
  user: {
    id: '9902296d-332b-4c93-baea-fd4cfc962360',
    name: 'José Eduardo',
    email: 'jose@eduardo.com',
    avatar: '94e0c12a57d1c7b37a0e-profile.jpeg',
    created_at: '2020-04-25T04:33:07.635Z',
    updated_at: '2020-05-25T04:55:48.726Z',
    avatar_url: 'https://api.adorable.io/avatars/100/abott@adorable.png',
  },
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTgyMTA4Nzg1LCJleHAiOjE1ODI3MTM1ODV9.RQwulX6kUOXTNSM30RCepbHwQjZPVw6BcMQKYOvza3Q',
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@AdvocateMe:token');
    const user = localStorage.getItem('@AdvocateMe:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async () => {
    const { user, token } = teste;

    localStorage.setItem('@AdvocateMe:token', token);
    localStorage.setItem('@AdvocateMe:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@AdvocateMe:token');
    localStorage.removeItem('@AdvocateMe:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@AdvocateMe:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
