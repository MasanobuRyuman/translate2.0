import { UserQuestions } from '../../domain/entities/UserQuestions'
import { Users } from './../../domain/entities/Users'

export abstract class IUserRepository {
  abstract createUser(name: string, password: string)
  abstract findUserByName(name: string): Promise<Users>
  abstract findUserByNameAndPassword(
    name: string,
    password: string
  ): Promise<Users>
}
