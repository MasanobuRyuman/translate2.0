import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "../domain/entities/Users"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Users],
    migrations: [],
    subscribers: [],
})
