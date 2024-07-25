import axios from 'app/api/axios';

export const fetchCarList = async (params: any) => {
  const response = await axios.get('/cars', { params });
  return response.data;
};

export const fetchCarDetail = async (id: string) => {
  const response = await axios.get('/cars/${id}');
  return response.data;
};

export const createCar = async (carData: any) => {
  const response = await axios.post('/cars', carData);
  return response.data;
};

export const deleteCar = async (id: string) => {
  const response = await axios.delete('/cars/${id}');
  return response.data;
};

export const updateCar = async (id: string, carData: any) => {
  const response = await axios.put('/cars/${id}', carData);
  return response.data;
};
