import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    readonly userId: number

    @Column()
    name: string

    @Column()
    password: string

}
