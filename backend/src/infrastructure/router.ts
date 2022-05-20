import express = require('express')
const passport = require('passport')
import { AppDataSource } from './data-source'
import { QuestionController } from '../interfaces/controllers/QuestionController'
import { UserController } from '../interfaces/controllers/UserController'
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const cors = require('cors');

import {numcheck} from './Validations'

const app = express()

AppDataSource.initialize()
  .then(async () => {
    console.log(
      'Here you can setup and run express / fastify / any other framework.'
    )
  })
  .catch((error) => console.log(error))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(passport.initialize())

app.use(passport.initialize())
app.use(cookieParser());
app.use(cors())

app.post('/api/signUp/', async (req:any, res) => {
  console.log("signUpに入った")
  console.log(req.body.data.username)
  const userController = new UserController(AppDataSource)
  const username = req.body.data.username
  const password = req.body.data.password
  const result = await userController.signUp(username, password)
  res.send(result)
})

app.post('/api/signIn/', async (req, res) => {
  const userController = new UserController(AppDataSource)
  const username = req.body.data.username
  const password = req.body.data.password
  const result = await userController.signIn(username, password)
  res.send(result)
})

app.get('/api/find/:id', async (req, res) => {
  const questionController = new QuestionController(AppDataSource)
  const id = numcheck(Number(req.params.id))
  const result = await questionController.findQuestion(id)
  res.send(result)
})

app.post('/api/create/', async (req,res) => {
  const questionController = new QuestionController(AppDataSource)
  const { userId, EN, JP, classId } = req.body.data
  const result = await questionController.createQuestion(userId, EN, JP, classId)
  res.send(result)
})

app.post('/api/update/', async (req) => {
  const questionController = new QuestionController(AppDataSource)
  const { questionId, EN, JP, classId } = req.body.data
  const result = await questionController.updateQuestion(
    questionId,
    EN,
    JP,
    classId
  )
})

app.post('/api/delete', async (req) => {
  const questionController = new QuestionController(AppDataSource)
  console.log("delete")
  const { questionId } = req.body.data
  console.log(questionId)
  const result = await questionController.deleteQuestion(questionId)
})

app.listen(process.env.PORT || 3001, () => {
  console.log('Start on port 3001.')
})
