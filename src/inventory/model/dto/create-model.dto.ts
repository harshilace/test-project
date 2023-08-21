import { IsNotEmpty, Length } from 'class-validator';
export class CreateModelDTO {
    @IsNotEmpty()
    @Length(5, 15)
    readonly title: string;

    @IsNotEmpty()
    @Length(10, 50)
    readonly description: string;
}