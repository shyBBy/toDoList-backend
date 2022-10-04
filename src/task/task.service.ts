import {HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TaskCreateDto } from './dto/task-create.dto';
import { TaskUpdateDto } from './dto/task-update.dto';
import {TaskEntity} from "./entities/task.entity";
import {GetListOfTaskResponse} from "../interfaces/task";
import { v4 as uuid } from 'uuid';

@Injectable()
export class TaskService {
  async create(createTaskDto: TaskCreateDto) {
    const {title} = createTaskDto
    try {
      const task = new TaskEntity();
      const date = new Date()
      task.title = title;
      task.createdAt = date.getUTCFullYear() + '/' + (date.getMonth() + 1) + '/' + (date.getUTCDate())
      task.id = uuid()
      task.createdByUserId = 'SZTYWNO'
      task.status = 'Nowy'
      task.expiration = '10.10.2022'
      task.priority = 'Niski'
      await task.save()
      return {
        message: `Pomyślnie utworzono task : ${title}`,
        isSuccess: true,
      }


    } catch (e) {
      console.log(e)
      throw new HttpException(
          {
            message: `Coś poszło nie tak, spróbuj później.`,
            isSuccess: false,
          },
          HttpStatus.NOT_FOUND,
      );
    }
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
