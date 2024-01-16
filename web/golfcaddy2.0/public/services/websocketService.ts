import { io, Socket } from 'socket.io-client';

let socket: Socket;

export const initializeWebSocket = () => {
  socket = io('http://localhost:3002'); // Update with your server URL
};

export const getSocket = () => {
  if (!socket) {
    throw new Error('WebSocket not initialized. Call initializeWebSocket first.');
  }
  return socket;
};



 