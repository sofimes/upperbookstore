const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cookieParser = require("cookie-parser");
const { PORT } = require("./constants/env"); // safe: dotenv already loaded
const { connectDB } = require("./config/db");
const cors = require("cors");
const { authRoute } = require("./routes/acc.route");
require("./utils/passport"); // registers strategies as side-effects
const passport = require("passport");

const session = require("express-session");
const bookRoute = require("./routes/book.route");
const bookCategoryRoute = require("./routes/bookCategory.route");
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoute);
app.use("/api/books", bookRoute);
app.use("/api/bookCategory", bookCategoryRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
