const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { PORT } = require("./constants/env");

const app = express();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
