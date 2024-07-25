import axios from 'app/api/axios';

export const registerUser = async (userData: { email: string; password: string; name: string }) => {
  const response = await axios.post('/auth/register', { ...userData, username: userData?.email });
  return response.data;
};

export const loginUser = async (userData: { email: string; password: string }) => {
  const response = await axios.post('/auth/login', userData);
  return response.data;
};
