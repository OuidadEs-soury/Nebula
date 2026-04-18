const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: "*" }
});

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/planets", require("./routes/planet"));

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("newPlanet", (planet) => {
    io.emit("planetCreated", planet);
  });
});

server.listen(5000, () => console.log("Server running on 5000"));