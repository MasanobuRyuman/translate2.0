import express = require('express')
import {AppDataSource} from './../data-source'
import {User} from './../domain/entity/User'

const app = express();
const user = new User()
AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.name = "Timber"
    user.password = "Saw"
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*");
    next();
})

app.listen(3000, () => {
    console.log("Start on port 3000.")
})

app.get("/", async (req, res) => {
    res.send('hello!')
})

app.get("/test", async (req, res) => {
    const users = await AppDataSource.manager.find(User)
    res.send(users)
})

