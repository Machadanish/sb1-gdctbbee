import React, { createContext, useContext, useState, useCallback } from 'react';
import { User, AuthState, SignUpData } from '../types/auth';

interface AuthContextType extends AuthState {
  login: (email: string, password: string, role: string) => Promise<void>;
  signup: (data: SignUpData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  const login = useCallback(async (email: string, password: string, role: string) => {
    // TODO: Implement actual authentication
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email,
      role: role as User['role'],
    };

    setState({
      user: mockUser,
      isAuthenticated: true,
    });
  }, []);

  const signup = useCallback(async (data: SignUpData) => {
    // TODO: Implement actual registration
    const mockUser: User = {
      id: '1',
      name: data.name,
      email: data.email,
      role: data.role,
    };

    setState({
      user: mockUser,
      isAuthenticated: true,
    });
  }, []);

  const logout = useCallback(() => {
    setState({
      user: null,
      isAuthenticated: false,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};