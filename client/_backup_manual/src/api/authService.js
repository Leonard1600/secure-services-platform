import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginRequest = async (credentials) => {
  const { data } = await API.post('/auth/login', credentials);
  return data;
};

export const registerRequest = async (userData) => {
  const { data } = await API.post('/auth/register', userData);
  return data;
};

export const profileRequest = async () => {
  const { data } = await API.get('/auth/profile');
  return data;
};
