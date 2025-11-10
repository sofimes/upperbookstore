const passport = require("passport");
require("../utils/passport");

const requireLogin = passport.authenticate("jwt", { session: false });

const requireRole = (role = "admin") => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      return next();
    }
    return res.status(403).json({
      error: true,
      message: "Access denied. You do not have required priveleges",
    });
  };
};

module.exports = { requireLogin, requireRole };
