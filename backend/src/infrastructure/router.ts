import express = require('express')
import { AppDataSource } from './data-source'
import { QuestionController } from '../interfaces/controllers/QuestionController'
import { UserController } from '../interfaces/controllers/UserController'
const bodyParser = require('body-parser')
const cors = require('cors')

import { numCheck } from './Validations'

const app = express()

AppDataSource.initialize()
  .then(async () => {
    console.log(
      'Here you can setup and run express / fastify / any other framework.'
    )
  })
  .catch((error) => console.log(error))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post('/api/signUp/', async (req: any, res) => {
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
  const id = numCheck(Number(req.params.id))
  const result = await questionController.findQuestion(id)
  res.send(result)
})

app.post('/api/create/', async (req, res) => {
  const questionController = new QuestionController(AppDataSource)
  const userId = numCheck(req.body.data.userId)
  const EN = req.body.data.EN
  const JP = req.body.data.JP
  const classId = numCheck(req.body.data.classId)
  const result = await questionController.createQuestion(
    userId,
    EN,
    JP,
    classId
  )
  res.send(result)
})

app.post('/api/update/', async (req, res) => {
  const questionController = new QuestionController(AppDataSource)
  const questionId = numCheck(req.body.data.questionId)
  const EN = req.body.data.EN
  const JP = req.body.data.JP
  const classId = numCheck(req.body.data.classId)
  const result = await questionController.updateQuestion(
    questionId,
    EN,
    JP,
    classId
  )
  res.send(result)
})

app.post('/api/delete', async (req, res) => {
  const questionController = new QuestionController(AppDataSource)
  const questionId = numCheck(req.body.data.questionId)
  const result = await questionController.deleteQuestion(questionId)
  res.send(result)
})

app.listen(process.env.PORT || 3001, () => {
  console.log('Start on port 3001.')
})
