const jwt = require("jsonwebtoken");
const {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
} = require("../constants/env");

const generateToken = (data) => {
  const accessToken = jwt.sign(data, ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign(data, REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
  return { accessToken, refreshToken };
};
const verifyAndRefreshToken = (refreshToken) => {
  return new Promise((resolve, reject) => {
    jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, {}, (err, payload) => {
      if (err || typeof payload === "undefined")
        return reject(err || new Error("Invalid payload"));
      const newAccessToken = jwt.sign({ id: payload.id }, ACCESS_TOKEN_SECRET, {
        expiresIn: "15m",
      });
      resolve({ accessToken: newAccessToken });
    });
  });
};
const decodeToken = (accessToken) =>
  jwt.decode(accessToken, {
    json: true,
  });

module.exports = { generateToken, verifyAndRefreshToken, decodeToken };
