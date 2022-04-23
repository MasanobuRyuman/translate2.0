import express = require('express')
import { AppDataSource } from './data-source'
import { Users } from '../domain/entities/Users'
import { QuestionController } from '../interfaces/controllers/QuestionController'
import { UserController } from '../interfaces/controllers/UserController'

const app = express()
const user = new Users()
AppDataSource.initialize()
  .then(async () => {
    console.log(
      'Here you can setup and run express / fastify / any other framework.'
    )
  })
  .catch((error) => console.log(error))

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
  }
)

app.listen(3000, () => {
  console.log('Start on port 3000.')
})

app.get('/', async (req, res) => {
  res.send('hello!')
})

app.get('/api/signUp', async (req, res) => {
  const userController = new UserController(AppDataSource)
  await userController.signUp(req, res)
})

app.get('/api/signIn', async (req, res) => {
  const userController = new UserController(AppDataSource)
  await userController.signIn(req, res)
})

app.get('/api/find/:id', async (req, res) => {
  const questionController = new QuestionController(AppDataSource)
  let result = await questionController.findQuestion(req, res)
})

app.get('/api/create/:id', async (req, res) => {
  const questionController = new QuestionController(AppDataSource)
  let result = await questionController.createQuestion(req, res)
})

app.get('/api/update/:id', async (req, res) => {
  const questionController = new QuestionController(AppDataSource)
  let result = await questionController.updateQuestion(req, res)
})

app.get('/api/delete/:id', async (req, res) => {
  const questionController = new QuestionController(AppDataSource)
  let result = await questionController.deleteQuestion(req, res)
})
