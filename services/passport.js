const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const Keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id,done) =>{
    User.findById(id).then(user => {
      done(null,user);
    });
});

passport.use(
  new googleStrategy(
    {
      clientID : Keys.googleClientID,
      clientSecret : Keys.googleClientSecret,
      callbackURL : '/auth/google/callback',
      proxy: true
    },
  (accessToken,refreshToken,profile,done) => {
    User.findOne({googleId : profile.id })
    .then(existinguser => {
      if(existinguser)
      {
        done(null,existinguser);
      }
      else
      {
        new User({ googleId: profile.id })
        .save()
        .then(user => done(null,user));
      }
    });
  }
));
