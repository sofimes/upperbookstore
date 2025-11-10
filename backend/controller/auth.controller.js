const { NODE_ENV } = require("../constants/env");

const { loginUser, registerUser } = require("../services/user.service");

const { generateToken, verifyAndRefreshToken } = require("../utils/token");

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser({
      email,
      password,
    });
    const { accessToken, refreshToken } = generateToken({ id: user._id });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      secure: NODE_ENV === "production",
      sameSite: "strict",
    });
    res.json({ accessToken, user });
  } catch (error) {
    console.log(error);
    res.json({ error: true, message: error.message });
  }
};

const registerReaderController = async (req, res) => {
  const userData = req.body;
  try {
    const reader = registerUser({ userData, role: "reader" });
    res.json(reader);
  } catch (error) {
    console.error(error);
    res.json({ error: true, message: error.message });
  }
};

const refreshTokenController = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  try {
    if (!refreshToken) {
      throw new Error("Invalid refresh token");
    }
    const accessToken = await verifyAndRefreshToken(refreshToken);
    res.json(accessToken);
  } catch (error) {
    console.error(error);
    res.json({ error: true, message: error.message });
  }
};

const logoutController = async (req, res) => {
  try {
    res.clearCookie("refreshToken");
    req.session.destroy((error) => {
      if (error) {
        throw Error(error);
      }
    });
    res.json("Successfully logged out ");
  } catch (error) {
    console.error(error);
    res.json({ error: true, message: error.message });
  }
};

const googleLoginController = async (req, res) => {
  const { accessToken, refreshToken } = generateToken({
    id: req.user._id,
  });
  res.cookies("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 69 * 1000,
    secure: NODE_ENV === "production",
    sameSite: "strict",
  });

  const queryParams = new URLSearchParams({ accessToken });
  res.redirect(`http://localhost:5173/`);
};
const getMeController = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ error: true, message: "Unauthorized" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error in getMeController:", error);
    return res.json({ error: true, message: error.message });
  }
};
module.exports = {
  loginController,
  getMeController,
  logoutController,
  refreshTokenController,
  googleLoginController,
  registerReaderController,
};
