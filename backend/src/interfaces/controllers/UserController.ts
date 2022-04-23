import { UserRepository } from "../database/UserRepository"
import {SignUp} from "../../application/usecases/SingUp"

export class UserController{
  private questionRepository
  constructor(dbConnection: any) {
    this.questionRepository = new UserRepository(dbConnection)
  }

  async signUp(req: any, res: any) {
    const useCase = new SignUp(this.questionRepository)
    let result = useCase.execute("のぶ","nnnnnn")
    return result
  }
}