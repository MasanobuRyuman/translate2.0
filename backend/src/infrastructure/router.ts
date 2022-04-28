/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
import  express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')
import { AppDataSource } from './data-source'
import { Users } from '../domain/entities/Users'
import { QuestionController } from '../interfaces/controllers/QuestionController'
import { UserController } from '../interfaces/controllers/UserController'
const bodyParser = require('body-parser')

const app = express()
const user = new Users()
AppDataSource.initialize()
  .then(async () => {
    console.log(
      'Here you can setup and run express / fastify / any other framework.'
    )
  })
  .catch((error) => console.log(error))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize())

passport.use(
  new LocalStrategy(async function (username, password, done) {
    const userController = new UserController(AppDataSource)
    const result = await userController.signIn(username, password)
    if (result.success == true){
      done(null,result)
    }else{
      done(null,false)
    }
  })
)

passport.serializeUser((user, done) => {
  console.log("serializeUserですよ〜")
  done(null, user)
})

passport.deserializeUser(( user, done) => {
  console.log("deserializeUserですよ〜")
    return done(null, user);
});

app.use(
  session({
    secret: 'keyboard_cat',
    resave: false,
    saveUninitialized: false,
  })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(passport.authenticate('session'));

app.listen(3000, () => {
  console.log('Start on port 3000.')
})

app.get('/', async (req, res) => {
  res.send(req.user)
})

app.post('/api/signUp/', async (req, res) => {
  const userController = new UserController(AppDataSource)
  const name = req.body.username
  const password = req.body.password
  const result = await userController.signUp(name, password)
  res.send(result)
})

app.post('/api/signIn/', passport.authenticate('local'), async (req, res) => {res.send("成功")})

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

app.post('/test',async(req,res) =>{
  res.send(req.body.username)
})