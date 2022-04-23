import { IQuestionRepository } from '../repositories/IQuestionRepository'

export class DeleteQuestion {
  private questionRepository: IQuestionRepository

  constructor(taskRepository: IQuestionRepository) {
    this.questionRepository = taskRepository
  }

  execute(questionId: number) {
    this.questionRepository.delete(questionId)
  }
}
