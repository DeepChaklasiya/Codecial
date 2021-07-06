const express = require("express");

const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const port = process.env.PORT || 5000;

const app = express();
dotenv.config();

// Routes
const userRoute = require("./Routes/users");
const authRoute = require("./Routes/auth");
const postRoute = require("./Routes/posts");

const url = process.env.MONGO_URL;
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to database");
  }
);

// middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// routes
app.get("/", (req, res) => {
  res.json("Welcome to home page");
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
