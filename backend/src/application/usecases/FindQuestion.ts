import {IQuestionRepository} from '../repositories/IQuestionRepository'

export class FindQuestion {
  private questionRepository: IQuestionRepository

  constructor(taskRepository: IQuestionRepository) {
    this.questionRepository = taskRepository
  }

  execute(id: number) {
    this.questionRepository.find(id)
  }
}