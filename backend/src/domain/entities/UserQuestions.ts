import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

@Entity()
export class UserQuestions {
  @Column()
  userId: number
  @PrimaryGeneratedColumn()
  questionId: number
  @Column()
  EN: string
  @Column()
  JP: string
  @Column()
  classId: number
}
