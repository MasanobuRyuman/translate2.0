import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    readonly id: number

    @Column()
    name: string

    @Column()
    password: string

}
