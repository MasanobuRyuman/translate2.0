import express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')
import { AppDataSource } from './data-source'
import { QuestionController } from '../interfaces/controllers/QuestionController'
import { UserController } from '../interfaces/controllers/UserController'
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

const app = express()

AppDataSource.initialize()
  .then(async () => {
    console.log(
      'Here you can setup and run express / fastify / any other framework.'
    )
  })
  .catch((error) => console.log(error))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize())

app.use(session({
  secret: 'crackalackindafaafa',
  resave: false,
  saveUninitialized: false,
  cookie : { secure : false, maxAge : (4 * 60 * 60 * 1000) }, // 4 hours})); 
}));
app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser());

passport.use(
  new LocalStrategy(async function (username, password, done) {
    const userController = new UserController(AppDataSource)
    const result = await userController.signIn(username, password)
    if (result.success == true) {
      done(null, "nobu")
    } else {
      done(null, false)
    }
  })
)

passport.serializeUser((user, done) => {
  console.log('serializeUserですよ〜')
  done(null, user)
})
passport.deserializeUser(function(user,done) {
  console.log("deserializeUserですよ〜")
  return done(null,user)
});

app.listen(3000, () => {
  console.log('Start on port 3000.')
})

app.get('/',function(req:any, res, next) {
  console.log(req.user)
});

app.post('/api/signUp/', async (req:any, res) => {
  const userController = new UserController(AppDataSource)
  const name = req.body.username
  const password = req.body.password
  const result = await userController.signUp(name, password)
  var user = {
    username: name,
    password:password
  };
  req.login(user, function(err) {
    
  });
  res.send(result)
})

app.post('/api/signIn/', passport.authenticate('local',{
  session:true
}), async (req, res) => {
  res.send("成功")
})

app.get('/api/find/:id', async (req, res) => {
  const questionController = new QuestionController(AppDataSource)
  const { id } = req.params
  const result = await questionController.findQuestion(id)
  res.send(result)
})

app.post('/api/create/', async (req) => {
  const questionController = new QuestionController(AppDataSource)
  const { id, EN, JP, classId } = req.body
  const result = await questionController.createQuestion(id, EN, JP, classId)
})

app.post('/api/update/:id', async (req) => {
  const questionController = new QuestionController(AppDataSource)
  const { questionId, EN, JP, classId } = req.body
  const result = await questionController.updateQuestion(
    questionId,
    EN,
    JP,
    classId
  )
})

app.post('/api/delete/:id', async (req) => {
  const questionController = new QuestionController(AppDataSource)
  const { questionId } = req.body
  const result = await questionController.deleteQuestion(questionId)
})

app.post('/test', async (req, res) => {
  res.send(req.body)
})
