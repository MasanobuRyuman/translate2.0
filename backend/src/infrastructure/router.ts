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

app.post('/api/signUp/', async (req, res) => {
  const userController = new UserController(AppDataSource)
  const { name, password } = req.body()
  await userController.signUp(name, password)
})

app.post('/api/signIn/', async (req, res) => {
  const userController = new UserController(AppDataSource)
  const { name, password } = req.body
  await userController.signIn(name, password)
})

app.get('/api/find/:id', async (req, res) => {
  const questionController = new QuestionController(AppDataSource)
  const { id } = req.params
  let result = await questionController.findQuestion(id)
})

app.post('/api/create/', async (req) => {
  const questionController = new QuestionController(AppDataSource)
  const { id, EN, JP, classId } = req.body
  let result = await questionController.createQuestion(id, EN, JP, classId)
})

app.post('/api/update/:id', async (req) => {
  const questionController = new QuestionController(AppDataSource)
  const { questionId, EN, JP, classId } = req.body
  let result = await questionController.updateQuestion(
    questionId,
    EN,
    JP,
    classId
  )
})

app.post('/api/delete/:id', async (req) => {
  const questionController = new QuestionController(AppDataSource)
  const { questionId } = req.body
  let result = await questionController.deleteQuestion(questionId)
})
