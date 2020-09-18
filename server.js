const express = require("express");
const app = express();
const http = require("http");
const socket_io = require("socket.io");
const winston = require("winston");

//Winston logger with  time addition
const logger = winston.createLogger({
  transports: [new winston.transports.Console({ timestamp: true })],
});
//Server
const server = http.createServer(app);
const io = socket_io(server);

//Logs when client connects to the server.
io.on("connection", (socket) => {
  logger.info("New client connected!!");

  //when client connects
  io.emit("message", `"user" has joined the chat`);

  //Runs when client disconnects
  socket.on("disconnect", () => {
    logger.info("user has left the chat!!");
    io.emit("message", `user has left the chat`);
  });
});
//@ak

//@pinglet
// Parket was here.. 

//----

//PORT settings
server.listen("4500", () => {
  logger.info(`Server running on port 4500`);
});

//setting static path!! ||  @akar016012
app.use(express.static("public"));
