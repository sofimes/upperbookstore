const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { PORT } = require("./constants/env");
const { connectDB } = require("./config/db");
const cors = require("cors");
const { authRoute } = require("./routes/acc.route");
const passport = require("passport");
const session = require("express-session");
const app = express();

dotenv.config();
connectDB();
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "qwerasdfzxcv",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
