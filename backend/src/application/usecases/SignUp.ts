import { IUserRepository } from '../repositories/IUserRepository'

export class SignUp {
  private userRepository: IUserRepository
  constructor(taskRepository: IUserRepository) {
    this.userRepository = taskRepository
  }

  async execute(name: string, password: string) {
    let userData = await this.userRepository.findUserByName(name)
    let success = false
    if (userData == null) {
      userData = await this.userRepository.createUser(name, password)
      success = true
    }

    const data = {
      success: success,
      userData: userData,
    }
    console.log(data)
    return data
  }
}
