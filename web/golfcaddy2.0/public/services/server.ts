// server.ts
import express from "express";
import http from "http";
import { Server as SocketIOServer, Socket } from "socket.io";
 const app = express();
 
const server = http.createServer(app);
const io = new SocketIOServer(server);
io.on("connection", (socket: Socket) => {
  console.log("User connected");

  socket.on("message", (message: string) => {
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 3002;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
