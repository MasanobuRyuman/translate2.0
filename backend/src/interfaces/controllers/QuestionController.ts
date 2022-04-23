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

  async findQuestion(req: any, res: any) {
    const { id } = req.params
    const useCase = new FindQuestion(this.questionRepository)
    let result = useCase.execute(id)
    return result
  }

  async createQuestion(req: any, res: any) {
    const useCase = new CreateQuestion(this.questionRepository)
    let result = useCase.execute(2, 'test', 'テスト', 1)
    return result
  }

  async updateQuestion(req: any, res: any) {
    const { questionId, EN, JP, classId } = req.params
    const useCase = new UpdateQuestion(this.questionRepository)
    let result = useCase.execute(2, 'test', 'テスト', 2)
    return result
  }

  async deleteQuestion(req: any, res: any) {
    const { questionId } = req.params
    const useCase = new DeleteQuestion(this.questionRepository)
    let result = useCase.execute(2)
    return result
  }
}
