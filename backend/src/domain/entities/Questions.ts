import { Entity,PrimaryColumn,Column,OneToOne,JoinColumn } from "typeorm";
import { UserQuestions } from "./UserQuestions";

@Entity()
export class Questions {
  @PrimaryColumn()
  @OneToOne(() => UserQuestions,questionId => questionId.questionId)
  @JoinColumn()
  readonly questionId: number
  @Column()
  JP: string
  @Column()
  EN: string
}