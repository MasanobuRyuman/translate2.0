import {IQuestionRepository} from '../repositories/IQuestionRepository'

export class UpdateQuestion {
  private questionRepository: IQuestionRepository

  constructor(taskRepository: IQuestionRepository) {
    this.questionRepository = taskRepository
  }

  execute(questionId: number,EN: string,JP: string,classId: number) {
    this.questionRepository.update(questionId,EN,JP,classId)
  }
}