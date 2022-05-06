import express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('cookie-session')
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

app.use(passport.initialize())
app.use(cookieParser());

app.post('/api/signUp/', async (req:any, res) => {
  const userController = new UserController(AppDataSource)
  const name = req.body.username
  const password = req.body.password
  const result = await userController.signUp(name, password)
  res.send(result)
})

app.post('/api/signIn/', async (req, res) => {
  const {username,password} = req.body
  const userController = new UserController(AppDataSource)
  const result = await userController.signIn(username, password)
  res.send(result)
})

app.get('/api/find/:id', async (req, res) => {
  const questionController = new QuestionController(AppDataSource)
  const { id } = req.params
  const result = await questionController.findQuestion(id)
  res.send(result)
})

app.post('/api/create/', async (req,res) => {
  const questionController = new QuestionController(AppDataSource)
  const { id, EN, JP, classId } = req.body
  const result = await questionController.createQuestion(id, EN, JP, classId)
  res.send("kita")
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

app.listen(3000, () => {
  console.log('Start on port 3000.')
})
