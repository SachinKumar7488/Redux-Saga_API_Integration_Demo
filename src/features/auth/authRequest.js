// src/features/auth/authRequest.js
import axiosInstance from '../../api/axiosInstance';

export const loginRequest = async (payload) => {
  try{
  const response = await axiosInstance.post('/Auth/login', payload);
  return response.data;
  } catch (error) {
    console.error('LOGIN API ERROR:', error.response?.data || error.message);
    throw error;
  }
};
