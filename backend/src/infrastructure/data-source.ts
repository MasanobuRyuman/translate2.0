import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "../domain/entities/Users"
import { UserQuestions } from "../domain/entities/UserQuestions"
import { Questions } from "../domain/entities/Questions"
import { Class } from "../domain/entities/Class"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Users,UserQuestions,Questions,Class],
    migrations: [],
    subscribers: [],
})
