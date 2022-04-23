import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { UserQuestions } from './UserQuestions'

@Entity()
export class Class {
  @PrimaryColumn()
  classId: number
  @Column({ charset: 'utf8' })
  className: string
  @OneToMany(() => UserQuestions, (userQuestion) => userQuestion.classId)
  userQuestions: UserQuestions[]
}
