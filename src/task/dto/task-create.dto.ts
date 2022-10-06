import {TaskInterface} from "../../interfaces/task";
import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class TaskCreateDto {

    @ApiProperty({
        description: 'Tytuł taska',
        type: String
    })
    @IsNotEmpty()
    title: string;

}
