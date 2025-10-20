const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { PORT } = require("./constants/env");
const { connectDB } = require("./config/db");
const app = express();

app.use;

connectDB();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
