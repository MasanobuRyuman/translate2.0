import { isDataView } from "util/types"
import { IQuestionRepository } from "../../application/repositories/IQuestionRepository"
import { Class } from "../../domain/entities/Class"
import { UserQuestions } from "../../domain/entities/UserQuestions"

export class QuestionRepository extends IQuestionRepository {
  private DataSource: any

  constructor(DataSource: any) {
    super()
    this.DataSource = DataSource
  }
  async find(Id: number) {
    const userQuestions = new UserQuestions()
    console.log(Id);
    try {
      const QuestionData = await this.DataSource.getRepository(UserQuestions).find({
        relations: ['classId'], 
        where: {
          userId: Id
        },
      })
      return(QuestionData)
    } catch(error){
      console.log(error)
    }
  }

  async insert(userId: number,EN: string,JP: string,classId: number){
    try{
      let test = await this.DataSource.getRepository(UserQuestions).save({
        userId : userId,
        EN : EN,
        JP : JP,
        classId : classId,
      })
    }catch(error){
     console.log(error)
    }
  }

  async update(questionId: number,EN: string,JP: string,classId: number){
    try {
      await this.DataSource.getRepository(UserQuestions).update({questionId:questionId},{EN:EN,JP:JP,classId:classId})
    }catch(error){
      console.log(error)
    }
  }
  async delete(questionId: number) {
    try {
      await this.DataSource.getRepository(UserQuestions).delete({questionId:questionId})
    }catch(error){
      console.log(error)
    }
  }
}