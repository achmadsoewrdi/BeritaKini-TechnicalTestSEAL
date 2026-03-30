import axios from 'axios';

/**
 * Axios instance — /api prefix works for both dev (Vite proxy) 
 * and production (Vercel serverless function)
 */
const api = axios.create({
  baseURL: '',   // Selalu pakai relative URL, proxy yang handle
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error?.message || 'Unknown error');
    return Promise.reject(error);
  }
);

export default api;