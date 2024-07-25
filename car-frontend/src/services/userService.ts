import axios from 'app/api/axios';

export const registerUser = async (userData: { email: string; password: string; name: string }) => {
  const response = await axios.post('/auth/register', { name: userData?.name, username: userData?.email, password: userData?.password });
  return response.data;
};

export const loginUser = async (userData: { email: string; password: string }) => {
  const response = await axios.post('/auth/login', { username: userData?.email, password: userData?.password });
  return response.data;
};
