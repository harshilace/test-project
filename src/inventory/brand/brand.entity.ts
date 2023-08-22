import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('brands')
export class Brand {

    @PrimaryGeneratedColumn()
    brandid: number;

    @Column()
    title:string;

    @Column() 
    description:string;
}