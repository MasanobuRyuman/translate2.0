import { Entity,PrimaryColumn,Column } from "typeorm";

@Entity()
export class TestData {
  @PrimaryColumn()
  readonly id: number
  @Column()
  JP: string
  @Column()
  EN: string
  @Column()
  ClassID: string
}