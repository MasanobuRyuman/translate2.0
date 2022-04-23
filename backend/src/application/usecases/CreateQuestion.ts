import { IQuestionRepository } from '../repositories/IQuestionRepository'

export class CreateQuestion {
  private questionRepository: IQuestionRepository

  constructor(taskRepository: IQuestionRepository) {
    this.questionRepository = taskRepository
  }

  execute(id: number, EN: string, JP: string, classId: number) {
    this.questionRepository.insert(id, EN, JP, classId)
  }
}
