import { Entity,PrimaryGeneratedColumn,Column,ManyToOne} from "typeorm";
import {Class} from "./Class";

@Entity()
export class UserQuestions {
  @Column()
  userId: number
  @PrimaryGeneratedColumn()
  questionId : number
  @Column()
  EN:string
  @Column()
  JP: string
  @ManyToOne(() => Class)
  classId : Class
}