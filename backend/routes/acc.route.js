const { Router } = require("express");

const {
  loginController,
  logoutController,
  refreshTokenController,
  googleLoginController,
} = require("../controller/auth.controller");

const passport = require("passport");

const authRoute = Router();

authRoute.post("/login", loginController);
authRoute.post("/logout", logoutController);
authRoute.post("/refreshToken", refreshTokenController);

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
