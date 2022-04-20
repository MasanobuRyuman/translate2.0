import { Entity,PrimaryColumn,Column ,OneToOne,JoinColumn} from "typeorm";
import {Questions} from "./Questions";

@Entity()
export class UserQuestions {
  @Column()
  id: number
  @PrimaryColumn()
  @OneToOne(() => Questions,questionId => questionId.questionId)
  questionId : number
  @Column()
  classId : number
}