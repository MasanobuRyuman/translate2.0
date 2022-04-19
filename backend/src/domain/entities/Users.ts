import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    readonly id: number

    @Column()
    name: string

    @Column()
    password: string

}
