import { IQuestionRepository } from '../../application/repositories/IQuestionRepository'
import { UserQuestions } from '../../domain/entities/UserQuestions'

export class QuestionRepository extends IQuestionRepository {
  private DataSource: any

  constructor(DataSource: any) {
    super()
    this.DataSource = DataSource
  }
  async find(Id: number) {
    try {
      const QuestionData = await this.DataSource.getRepository(
        UserQuestions
      ).find({
        where: {
          userId: Id,
        },
      })
      console.log("Questionデータを取った")
      return QuestionData
    } catch (error) {
      console.log("findのエラー")
      console.log(error)
    }
  }

  async insert(userId: number, EN: string, JP: string, classId: number) {
    try {
      const test = await this.DataSource.getRepository(UserQuestions).save({
        userId: userId,
        EN: EN,
        JP: JP,
        classId: classId,
      })
      console.log(test)
    } catch (error) {
      console.log(error)
    }
  }

  async update(questionId: number, EN: string, JP: string, classId: number) {
    try {
      await this.DataSource.getRepository(UserQuestions).update(
        { questionId: questionId },
        { EN: EN, JP: JP, classId: classId }
      )
    } catch (error) {
      console.log(error)
    }
  }
  async delete(questionId: number) {
    try {
      await this.DataSource.getRepository(UserQuestions).delete({
        questionId: questionId,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
