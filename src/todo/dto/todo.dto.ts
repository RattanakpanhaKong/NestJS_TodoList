import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class TodoDto{
    @IsNotEmpty()
    @IsString()
    title: string

    @IsBoolean()
    completed: boolean
}