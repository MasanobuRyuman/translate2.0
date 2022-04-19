import { Entity,PrimaryColumn,Column } from "typeorm";

@Entity()
export class Questions {
  @PrimaryColumn()
  readonly questionId: number
  @Column()
  JP: string
  @Column()
  EN: string
}