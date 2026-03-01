import axios from 'axios';

const baseURL = (import.meta.env.VITE_BASE_URL || 'http://localhost:5000/api').replace(/\/+$/, '');

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Request:', config.method.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('Response Error:', error.response?.status, error.config?.url);

    if (error.response?.status === 401) {
      // window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
