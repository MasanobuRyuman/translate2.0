import { IUserRepository } from './../../application/repositories/IUserRepository'
import { Users } from '../../domain/entities/Users'

export class UserRepository extends IUserRepository {
  private DataSource: any

  constructor(DataSource: any) {
    super()
    this.DataSource = DataSource
  }

  async findUserByName(name: string): Promise<Users> {
    const userData = await this.DataSource.getRepository(Users).findOne({
      where: {
        name: name,
      },
    })
    return userData
  }

  async findUserByNameAndPassword(
    name: string,
    password: string
  ): Promise<Users> {
    const userData = await this.DataSource.getRepository(Users).findOne({
      where: {
        name: name,
        password: password,
      },
    })
    return userData
  }

  async createUser(name: string, password: string): Promise<Users> {
    const userData = await this.DataSource.getRepository(Users).save({
      name: name,
      password: password,
    })
    return userData
  }
}
