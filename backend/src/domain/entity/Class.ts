import { Entity,PrimaryColumn,Column } from "typeorm"

@Entity()
export class Class {
  @PrimaryColumn()
  ClassId: number
  @Column()
  ClassName: string
}