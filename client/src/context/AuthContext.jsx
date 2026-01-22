import { createContext, useContext, useEffect, useState } from 'react';
import {
  loginRequest,
  registerRequest,
} from '../api/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (data) => {
    const res = await loginRequest(data);
    localStorage.setItem('token', res.token);
    setUser(res.user);
  };

  const register = async (data) => {
    const res = await registerRequest(data);
    localStorage.setItem('token', res.token);
    setUser(res.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({}); // placeholder
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
