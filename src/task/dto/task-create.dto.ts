import {TaskInterface} from "../../interfaces/task";
import {IsNotEmpty} from "class-validator";

export class TaskCreateDto {
    @IsNotEmpty()
    title: string;

}
