/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { UserRepository } from '../database/UserRepository'
import { SignIn } from '../../application/usecases/SignIn'
import { SignUp } from '../../application/usecases/SignUp'

export class UserController {
  private userRepository
  constructor(dbConnection: any) {
    this.userRepository = new UserRepository(dbConnection)
  }

  async signIn(name, password) {
    const useCase = new SignIn(this.userRepository)
    const result = useCase.execute(name, password)
    return result
  }

  async signUp(name, password) {
    const useCase = new SignUp(this.userRepository)
    const result = useCase.execute(name, password)
    return result
  }
}
