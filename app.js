import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { Server } from "socket.io";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
 
const __dirname = dirname(fileURLToPath(import.meta.url));
 
app.use(express.static(join(__dirname + "/public")));
 
const expServer = app.listen(PORT, () => {
  console.log("Server started " + PORT);
}); 
const io = new Server(expServer);
 
io.on("connection", (socket) => {  
  socket.on("sender-join", function (data) { 
    socket.join(data.uid);
  });
 
  socket.on("receiver-join", function (data) { 
    socket.join(data.uid);
 
    socket.in(data.sender_uid).emit("init", data.uid);
  });
 
  socket.on("file-meta", function (data) { 
    socket.in(data.uid).emit("fs-meta", data.metadata);
  });
 
  socket.on("fs-start", function (data) { 
    socket.in(data.uid).emit("fs-share", {});
  });
 
  socket.on("file-raw", function (data) { 
    socket.in(data.uid).emit("fs-share", data.buffer);
  });
});
