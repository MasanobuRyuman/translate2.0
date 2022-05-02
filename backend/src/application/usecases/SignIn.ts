import { IUserRepository } from '../repositories/IUserRepository'

export class SignIn {
  private userRepository
  constructor(taskRepository: IUserRepository) {
    this.userRepository = taskRepository
  }

  async execute(name: string, password: string) {
    const userData = await this.userRepository.findUserByNameAndPassword(
      name,
      password
    )
    let success = true
    if (userData == null) {
      success = false
    }
    const data = {
      success: success,
      userData: userData,
    }
    console.log(data)
    return data
  }
}
