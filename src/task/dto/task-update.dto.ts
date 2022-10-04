import {TaskUpdateInterface} from "../../interfaces/task";
import {IsNotEmpty} from "class-validator";

export class TaskUpdateDto implements TaskUpdateInterface {
    @IsNotEmpty()
    editedAt: Date | string;

    @IsNotEmpty()
    priority: string;

    @IsNotEmpty()
    status: string;

}