var express = require('express');
var passport = require('passport');
import cookieSession = require('cookie-session');

const router = require('./router');
const auth = require('./auth');

const app = express();
app.listen(3000, () => {
  console.log('Start on port 3000.')
})

app.use(express.json())
app.use(cookieSession({
  name: 'session',
  secret: 'keyboard cat',
  maxAge: 7 * 24 * 60 * 60 * 1000 //７日間
}));
app.use(passport.authenticate('session'));
app.use("/",router);



