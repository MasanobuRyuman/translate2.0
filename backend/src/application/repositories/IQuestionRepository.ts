import { UserQuestions } from '../../domain/entities/UserQuestions'

export interface IFindQuestion {userId: number, questionId: number ,EN: string, JP: string, classId: number}

export abstract class IQuestionRepository {
  abstract find(id: number):Promise<IFindQuestion[]>
  abstract insert(id: number, EN: string, JP: string, classId: number)
  abstract update(questionId: number, EN: string, JP: string, classId: number)
  abstract delete(questionId: number)
}
