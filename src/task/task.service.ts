import {HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TaskCreateDto } from './dto/task-create.dto';
import { TaskUpdateDto } from './dto/task-update.dto';
import {TaskEntity} from "./entities/task.entity";
import {GetListOfTaskResponse} from "../interfaces/task";

@Injectable()
export class TaskService {
  create(createTaskDto: TaskCreateDto) {
    return 'This action adds a new task';
  }

  async findAll(): Promise<GetListOfTaskResponse> {
    try {
        return await TaskEntity.find()
    } catch (e) {
      console.log(e);
      throw new HttpException(
          {
            message: `Coś poszło nie tak, spróbuj później.`,
            isSuccess: false,
          },
          //@TODO: DO zmiany kod statusu
          HttpStatus.NOT_FOUND,
      );
    }
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
