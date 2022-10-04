import {TaskInterface} from "../../interfaces/task";
import {IsNotEmpty} from "class-validator";

export class TaskCreateDto implements TaskInterface {
    @IsNotEmpty()
    createdAt: Date | string;

    @IsNotEmpty()
    createdByUserId: string;

    @IsNotEmpty()
    editedAt: Date | string;

    @IsNotEmpty()
    expiration: Date | string;

    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    priority: string;

    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    title: string;

}
