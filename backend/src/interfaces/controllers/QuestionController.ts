/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/require-await */
import { QuestionRepository } from '../database/QuestionRepository'
import { FindQuestion } from '../../application/usecases/FindQuestion'
import { CreateQuestion } from '../../application/usecases/CreateQuestion'
import { UpdateQuestion } from '../../application/usecases/UpdateQuestion'
import { DeleteQuestion } from '../../application/usecases/DeleteQuestion'
import { Request, Response } from 'express-serve-static-core'
import { ParsedQs } from 'qs'

export class QuestionController {
  static findQuestion(
    req: Request<{}, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>, number>
  ) {
    throw new Error('Method not implemented.')
  }
  private questionRepository
  constructor(dbConnection: any) {
    this.questionRepository = new QuestionRepository(dbConnection)
  }

  async findQuestion(id) {
    const useCase = new FindQuestion(this.questionRepository)
    const result = useCase.execute(id)
    return result
  }

  async createQuestion(id: number, EN: string, JP: string, classId: number) {
    const useCase = new CreateQuestion(this.questionRepository)
    const result = useCase.execute(id, EN, JP, classId)
    return result
  }

  async updateQuestion(questionId, EN, JP, classId) {
    const useCase = new UpdateQuestion(this.questionRepository)
    const result = useCase.execute(questionId, EN, JP, classId)
    return result
  }

  async deleteQuestion(questionId) {
    const useCase = new DeleteQuestion(this.questionRepository)
    const result = useCase.execute(questionId)
    return result
  }
}
