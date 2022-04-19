import { UserQuestions } from "../../domain/entities/UserQuestions";

export abstract class IQuestionRepository {
  abstract find(id: number)
  abstract insert(id: number,EN: string,JP: string,classId: number)
  abstract update(questionId: number,EN: string,JP: string,classId: number)
  abstract delete(questionId: number)
}