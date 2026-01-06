import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import * as authService from '../services/mockAuth';

interface User {
  id: string;
  name: string;
  email: string;
  // Add other user properties as needed
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on initial load
    const checkUser = async () => {
      try {
        // I need an endpoint to get the current user profile
        // I have one: /api/auth/profile
        const response = await fetch('/api/auth/profile');
        if (response.ok) {
          const data = await response.json();
          setUser(data.profile);
        }
      } catch (error) {
        // Not logged in
      } finally {
        setIsLoading(false);
      }
    };
    checkUser();
  }, []);

  const login = async (email: string, password: string) => {
    const { profile } = await authService.login(email, password);
    setUser(profile);
  };

  const signup = async (email: string, password: string) => {
    const { profile } = await authService.signup(email, password);
    setUser(profile);
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
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
