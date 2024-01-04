// import { createServer } from 'http';
// import { Server, Socket } from 'socket.io';

// const httpServer = createServer();
// const io = new Server(httpServer, {
//   cors: {
//     origin: 'http://localhost:3000', // Update with your frontend URL
//   },
// });

// io.on('connection', (socket: Socket) => {
//   console.log('A user connected');

//   socket.on('message', (data: any) => {
//     io.emit('message', data); // Broadcast the message to all connected clients
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// httpServer.listen(4000, () => {
//   console.log('WebSocket server listening on *:4000');
// });
