const { ExtractJwt, Strategy: JwtStrategy } = require("passport-jwt");
const passport = require("passport");

const {
  ACCESS_TOKEN_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL,
} = require("../constants/env");

const { getUser, signInWithGoogle } = require("../services/user.service");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
    },

    async (accessToken, refreshToken, profile, done) => {
      const fullName = profile.displayName;
      const email = profile.emails[0].value;
      const googleId = profile.id;

      const user = await signInWithGoogle({
        userData: { fullName, email, googleId },
        role: "reader",
      });

      done(null, user);
    }
  )
);

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: ACCESS_TOKEN_SECRET,
};

passport.use(
  new JwtStrategy(opts, async (payload, done) => {
    try {
      const user = await getUser(payload, done);

      if (!user) {
        throw new Error("User not found");
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

module.exports = passport;
