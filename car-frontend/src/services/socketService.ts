import { io } from 'socket.io-client';

import { updateCar } from 'features/car/carSlice';

const socket = io(process.env.BACKEND_URL ?? 'http://localhost:3000'); // Replace with your server URL

export const initSocket = (dispatch: any) => {
  socket.on('connect', () => {
    console.log('Connected to WebSocket server');
  });

  socket.on('update', data => {
    console.log('Onupdate', data);
    dispatch(updateCar(data));
  });

  socket.on('disconnect', () => {
    console.log('Socket disconnected');
  });
};

export default socket;
