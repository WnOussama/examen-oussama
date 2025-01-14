const express = require("express");
const http = require("http");
const mongo = require("mongoose");
const path = require("path");
const userRouter = require("./routes/users");
const bibliothequeRouter = require("./routes/bibliotheques");
const livreRouter = require("./routes/livres");
const { addchat } = require("./controller/userController");
const db = require("./config/db.json");
mongo
  .connect(db.url)
  .then(console.log("database connected"))
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");
app.use("/users", userRouter);
app.use("/bibliotheque", bibliothequeRouter);
app.use("/livre", livreRouter);

const server = http.createServer(app, console.log("server run"));
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("user is connected");
  socket.emit("msg", "user is connected");
  socket.on("msgname", (data) => {
    addchat(data);
    io.emit("msgname", data);
  });

  socket.on("partie", (data) => {
    newPartiesocket(data);
    io.emit("partie", data);
  });
  socket.on("aff",async (data) => {
    const datanew= await affichersocket(data);
    io.emit("aff", datanew);
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });

  socket.on("disconnect", () => {
    console.log("user is disconnected");
    io.emit("msg", "user is disconnected");
  });
});

server.listen(3000);

module.exports = app;
