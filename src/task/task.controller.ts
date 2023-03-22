import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './types';

@Controller()
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('tasks')
  getAllTasks() {
    return this.taskService.getTask();
  }

  @Get('tasks/:id')
  getTask(@Param('id') id: number) {
    return this.taskService.getTask(id);
  }

  @Post('tasks')
  postTask(@Body() newTask: Task) {
    return this.taskService.create(newTask);
  }
}
