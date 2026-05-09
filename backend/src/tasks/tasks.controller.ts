import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
@UseGuards(AuthGuard('jwt'))
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Request() req, @Body('title') title: string, @Body('description') description?: string) {
    return this.tasksService.create(req.user.userId, title, description);
  }

  @Get()
  findAll(@Request() req) {
    return this.tasksService.findAll(req.user.userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateData: { title?: string; description?: string; isCompleted?: boolean }
  ) {
    return this.tasksService.update(+id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
} 