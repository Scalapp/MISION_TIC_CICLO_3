const passport = require ("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID ="630583337298-9vnf5n7d3mmgu0jb4cetqjaicd731sma.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb, done) {
    //User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //  return cb(err, user);
   // });
   return done(null, profile);
  }
));

passport.serializeUser(function(user, done){
    done(null, user)
});
passport.deserializeUser(function(user, done){
    done(null, user)
});
