import { Injectable } from '@nestjs/common';
import { TaskCreateDto } from './dto/task-create.dto';
import { TaskUpdateDto } from './dto/task-update.dto';
import {TaskEntity} from "./entities/task.entity";

@Injectable()
export class TaskService {
  create(createTaskDto: TaskCreateDto) {
    return 'This action adds a new task';
  }

  findAll() {
    return TaskEntity.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: TaskUpdateDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
