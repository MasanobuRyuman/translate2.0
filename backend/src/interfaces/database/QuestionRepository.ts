import { IQuestionRepository } from "../../application/repositories/IQuestionRepository"
import { UserQuestions } from "../../domain/entities/UserQuestions"

export class QuestionRepository extends IQuestionRepository {
  private DataSource: any

  constructor(DataSource: any) {
    super()
    this.DataSource = DataSource
  }
  async find(id: number) {
    const userQuestions = new UserQuestions()
    await this.DataSource.manager.find(userQuestions)
  }

  async insert(id: number,EN: string,JP: string,classId: number){
    const userQuestions = new UserQuestions()
    userQuestions.id = id
    userQuestions.questionId = 1
    userQuestions.classId = 1
    await this.DataSource.manager.save(userQuestions)
  }

  async update(id: number,EN: string,JP: string,classId: number){
    const userQuestions = new UserQuestions()
    userQuestions.id = id
    userQuestions.questionId = 1
    userQuestions.classId = 1
    await this.DataSource.manager.save(userQuestions)
  }
  async delete(questionId: number) {
    const userQuestions = new UserQuestions()
    userQuestions.questionId = 1
    userQuestions.classId = 1
    await this.DataSource.manager.save(userQuestions)
  }
}