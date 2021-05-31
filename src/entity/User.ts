import { IsNotEmpty, Length } from "class-validator";
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique} from "typeorm";
import * as bcrypt from "bcryptjs";

@Entity()
@Unique(['username'])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    @Length(4,20)
    @IsNotEmpty()
    username:string;

    @Column()
    @Length(6,100)
    @IsNotEmpty()
    password:string;

    @Column()
    @IsNotEmpty()
    role:string;

    @Column()
    @CreateDateColumn()
    createdAt:Date;

    @Column()
    @UpdateDateColumn()
    updatedAt:Date;

    hashPassword(){
        this.password=bcrypt.hashSync(this.password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string){
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }
}
