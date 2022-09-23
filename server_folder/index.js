const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    },
});

io.on("connection", (socket) => {
    console.log(`New user connected: ${socket.id}`);

    socket.on("messageSender", (data) => {
        socket.broadcast.emit("receivingMessages", data);
    });
});

server.listen(3001, () => {
    console.log("Server is running");
});