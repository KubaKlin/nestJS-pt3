import { NotFoundException } from '@nestjs/common';

export class TaskNotFoundException extends NotFoundException {
  constructor(taskID: number) {
    super(`Task with ID ${taskID} not found`);
  }
}