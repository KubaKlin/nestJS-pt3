import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import type { TaskDto } from './task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() task: TaskDto) {
    return this.tasksService.create(task);
  }

  @Get()
  getAll() {
    return this.tasksService.getAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.getById(id);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.tasksService.delete(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() task: TaskDto) {
    return this.tasksService.update(id, task);
  }
}
