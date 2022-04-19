import { Entity,PrimaryColumn,Column } from "typeorm";

@Entity()
export class UserQuestions {
  @PrimaryColumn()
  id: number
  @Column()
  questionId : number
  @Column()
  classId : number
}