import axios from 'axios';
import { clearStorage, getFromStorage } from 'common/utils/storage';

const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL ?? 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    let token = getFromStorage('token');

    try {
      token = JSON.parse(token);
    } catch (error) {
      console.log('err');
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      clearStorage();
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
