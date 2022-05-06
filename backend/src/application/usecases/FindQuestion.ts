import { IQuestionRepository } from '../repositories/IQuestionRepository'

export class FindQuestion {
  private questionRepository: IQuestionRepository

  constructor(taskRepository: IQuestionRepository) {
    this.questionRepository = taskRepository
  }

  async execute(id: number) {
    const result = await this.questionRepository.find(id)
    return result
  }
}
