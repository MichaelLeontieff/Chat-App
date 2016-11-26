const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const configuration = require("../config");
const db = require("../db");

if(process.env.NODE_ENV === 'production') {
  // Production session settings
  module.exports = session({
    secret: configuration.sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: db.Mongoose.connection
    })
  });
} else {
  // development session settings
  module.exports = session({
    secret: configuration.sessionSecret,
    resave: false,
    saveUninitialized: true
  });
}
