import { createContext, useContext, useEffect, useState } from 'react';
import {
  loginRequest,
  registerRequest,
  meRequest,
} from '../api/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // LOGIN
  const login = async (data) => {
    const res = await loginRequest(data);
    localStorage.setItem('token', res.token);
    setUser(res.user);
    return res;
  };

  // REGISTER
  const register = async (data) => {
    const res = await registerRequest(data);
    localStorage.setItem('token', res.token);
    setUser(res.user);
    return res;
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // VALIDAR SESIÓN AL RECARGAR
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await meRequest();
        setUser(res.user ?? res);
      } catch {
        localStorage.removeItem('token');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const isAuthenticated = Boolean(user);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
};
