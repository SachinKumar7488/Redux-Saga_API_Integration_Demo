// src/api/axiosInstance.js
import axios from 'axios';
import { BASE_URL } from '../config/apiConfig';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Retry on failure logic
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.config && error.response?.status >= 500) {
      // Retry once after failure
      return axiosInstance(error.config);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
