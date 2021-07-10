const io = require("socket.io")(8000, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("User Connected");
  io.emit("welcome", "hello this is socket server");
});
