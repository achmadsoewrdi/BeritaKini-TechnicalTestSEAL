import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

/**
 * Axios instance with base configuration
 * In development, uses Vite proxy (/api -> berita-indo-api)
 * In production, calls the API directly
 */
const isDev = import.meta.env.DEV;

const api = axios.create({
  baseURL: isDev ? '' : API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error?.message || 'Unknown error');
    return Promise.reject(error);
  }
);

export default api;
