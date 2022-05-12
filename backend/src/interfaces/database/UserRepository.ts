const bcrypt = require('bcrypt');

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
      where: [
        {name: name}
      ],
    })
    if (userData != null){
      if (bcrypt.compareSync(password, userData.password)) return (userData.userId)
    }
    return null
  }

  async createUser(name: string, password: string): Promise<Users> {
    console.log(password)
    let hashed_password = bcrypt.hashSync(password, 10);
    const _user = new Users()
    _user.name = name
    _user.password = hashed_password
    const userData = await this.DataSource.getRepository(Users).save(_user)
    return userData
  }
}
