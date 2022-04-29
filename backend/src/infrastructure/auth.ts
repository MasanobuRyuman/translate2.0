import express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

import { AppDataSource } from './data-source'
import { Users } from '../domain/entities/Users'
import { UserController } from '../interfaces/controllers/UserController'

const app = express()

passport.use(
  new LocalStrategy(async function (username, password, done) {
    const userController = new UserController(AppDataSource)
    const result = await userController.signIn(username, password)
    if (result.success == true) {
      done(null, result)
    } else {
      done(null, false)
    }
  })
)

passport.serializeUser((user, done) => {
  console.log('serializeUserですよ〜')
  done(null, user)
})

passport.deserializeUser((user, done) => {
  console.log('deserializeUserですよ〜')
  return done(null, user)
})

app.post('/api/signUp/', async (req, res) => {
  const userController = new UserController(AppDataSource)
  const name = req.body.username
  const password = req.body.password
  const result = await userController.signUp(name, password)
  res.send(result)
})

app.post('/api/signIn/', passport.authenticate('local'), async (req, res) => {
  res.send('成功')
})