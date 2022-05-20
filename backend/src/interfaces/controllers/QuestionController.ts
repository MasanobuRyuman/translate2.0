/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/require-await */
import { QuestionRepository } from '../database/QuestionRepository'
import { FindQuestion } from '../../application/usecases/FindQuestion'
import { CreateQuestion } from '../../application/usecases/CreateQuestion'
import { UpdateQuestion } from '../../application/usecases/UpdateQuestion'
import { DeleteQuestion } from '../../application/usecases/DeleteQuestion'
import { QuestionSerializer } from '../serializers/QestionsSerializer'

export class QuestionController {
  private questionRepository
  constructor(dbConnection: any) {
    this.questionRepository = new QuestionRepository(dbConnection)
  }

  async findQuestion(id:number) {
    const useCase = new FindQuestion(this.questionRepository)
    const questionSerializer = new QuestionSerializer()
    const result = await useCase.execute(id)
    return (questionSerializer.serialize(result))
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
