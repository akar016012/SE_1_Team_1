const express = require("express");
const app = express();
const http = require("http");
const socket_io = require("socket.io");

//Server
const server = http.createServer(app);
const io = socket_io(server);

//Logs when client connects to the server.
io.on("connection", (socket) => {
  console.log("New client connected!!");

  //when client connects
  io.emit("message", `"user" has joined the chat`);

  //Runs when client disconnects
  socket.on("disconnect", () => {
    console.log("user has left the chat!!");
    io.emit("message", `user has left the chat`);
  });
});

console.log("hello"); 

//PORT settings
server.listen("4500", () => {
  console.log(`Server running on port 4500`);
});

//setting static path!! ||  @akar016012
app.use(express.static("public"));
