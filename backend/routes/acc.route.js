const { Router } = require("express");
const { requireLogin } = require("../middleware/Auth.middleware");
const {
  loginController,
  logoutController,
  refreshTokenController,
  googleLoginController,
  registerReaderController,
  getMeController,
} = require("../controller/auth.controller");

const passport = require("passport");

const authRoute = Router();

authRoute.post("/login", loginController);
authRoute.post("/logout", logoutController);
authRoute.post("/refreshToken", refreshTokenController);
authRoute.post("/register", registerReaderController);
authRoute.get("/me", requireLogin, getMeController);
authRoute.get(
  "/google",
  passport.authenticate("google", { scope: ["email", " profile"] })
);

authRoute.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  googleLoginController
);
module.exports.authRoute = authRoute;
