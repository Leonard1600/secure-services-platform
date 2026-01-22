import axios from 'axios';

// Configuración directa al backend deployado
const api = axios.create({
  baseURL: 'https://secure-services-backend.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de request → adjunta token si existe
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de response → manejo global de errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
    }

    return Promise.reject(error);
  }
);

export default api;
