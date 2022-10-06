import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskCreateDto } from './dto/task-create.dto';
import { TaskUpdateDto } from './dto/task-update.dto';
import {ApiBearerAuth, ApiResponse, ApiTags} from '@nestjs/swagger';
import {GetListOfTaskResponse} from "../interfaces/task";


@ApiBearerAuth()
@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('create')
  @ApiResponse({status: 201, description: 'Task pomyślnie utworzony.'})
  create(@Body() createTaskDto: TaskCreateDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get('list')
  findAll(): Promise<GetListOfTaskResponse> {
    return this.taskService.findAll();
  }

}
