import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('brands')
export class Brand {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title:string;

    @Column() 
    description:string;
}