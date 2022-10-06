import {TaskUpdateInterface} from "../../interfaces/task";
import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class TaskUpdateDto implements TaskUpdateInterface {
    @ApiProperty()
    @IsNotEmpty()
    editedAt: Date | string;

    @ApiProperty()
    @IsNotEmpty()
    priority: string;

    @ApiProperty()
    @IsNotEmpty()
    status: string;

}