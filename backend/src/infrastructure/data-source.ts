import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "../domain/entities/Users"
import { UserQuestions } from "../domain/entities/UserQuestions"
import { Class } from "../domain/entities/Class"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "nobu",
    password: "test",
    database: "translate",
    synchronize: true,
    logging: false,
    entities: [Users,UserQuestions,Class],
    migrations: [],
    subscribers: [],
})
