import { UserRepository } from '../database/UserRepository'
import { SignUp } from '../../application/usecases/SignUp'
import { SignIn } from '../../application/usecases/SignIn'

export class UserController {
  private userRepository
  constructor(dbConnection: any) {
    this.userRepository = new UserRepository(dbConnection)
  }

  async signUp(req: any, res: any) {
    const useCase = new SignUp(this.userRepository)
    let result = useCase.execute('のぶ', 'nnnnnn')
    return result
  }

  async signIn(req: any, res: any) {
    const useCase = new SignIn(this.userRepository)
    let result = useCase.execute('のぶ', 'nnnnnn')
    return result
  }
}
