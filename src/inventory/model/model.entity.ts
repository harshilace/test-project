import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('models')
export class Model {

    @PrimaryGeneratedColumn()
    modelid: number;

    @Column()
    title:string;

    @Column() 
    description:string;
}