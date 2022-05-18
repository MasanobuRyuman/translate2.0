/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Users } from '../domain/entities/Users'
import { UserQuestions } from '../domain/entities/UserQuestions'

require('dotenv').config()

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: 'translate',
  synchronize: true,
  logging: false,
  entities: [Users, UserQuestions],
  migrations: [],
  subscribers: [],
})
