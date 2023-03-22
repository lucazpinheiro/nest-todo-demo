import { Injectable } from '@nestjs/common';
import { Task } from './types';

@Injectable()
export class TaskService {
  private taskList: Map<number, Task>;
  constructor() {
    this.taskList = new Map<number, Task>();
  }

  getTask(id?: number): Array<Task> {
    if (this.taskList.size === 0) {
      return [];
    }

    const requestedTask = this.taskList.get(id);
    if (requestedTask) {
      return [requestedTask];
    }

    const allTasks = [];
    this.taskList.forEach((el) => {
      allTasks.push(el);
    });

    return allTasks;
  }

  create(newTask: Task) {
    const [currentMaxID] = Array.from(this.taskList.keys()).sort((a, b) => {
      return b - a;
    });
    this.taskList.set(currentMaxID + 1, newTask);
  }
}
