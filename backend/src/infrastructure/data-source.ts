/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Users } from '../domain/entities/Users'
import { UserQuestions } from '../domain/entities/UserQuestions'
import { Class } from '../domain/entities/Class'

require('dotenv').config()
const { username, password } = process.env

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: username,
  password: password,
  database: 'translate',
  synchronize: true,
  logging: false,
  entities: [Users, UserQuestions, Class],
  migrations: [],
  subscribers: [],
})
