const passport = require("passport");

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID="630583337298-54fv9hi59e7iqbfoaljk06m1nftv9.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET="GOCSPX-srwFSxsX7yWJ2AfWANQDKogLP";

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
  //  User.findOrCreate({ googleId: profile.id }, function (err, user) {
   //   return done(err, user);
  //  });
  return done(null, profile);
  }

));

passport.serializeUser(function(user, done){
    done(null, user)
});

passport.deserializeUser(function(user, done){
    done(null, user)
});
