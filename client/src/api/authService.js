import axios from 'axios';

const API = axios.create({
  baseURL: 'https://secure-services-backend.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// LOGIN
export const loginRequest = async (credentials) => {
  const { data } = await API.post('/auth/login', credentials);
  return data;
};

// REGISTER
export const registerRequest = async (userData) => {
  const { data } = await API.post('/auth/register', userData);
  return data;
};

// ME (usuario autenticado)
export const meRequest = async () => {
  const { data } = await API.get('/auth/me');
  return data;
};
