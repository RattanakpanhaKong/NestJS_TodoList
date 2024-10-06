import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from '@prisma/client';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService){

    }

    @Get()
    async findAll(): Promise<Todo[]> {
      return this.todoService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Todo | null> {
      return this.todoService.findOne(parseInt(id));
    }
  
    @Post()
    async create(@Body('title') title: string): Promise<Todo> {
      return this.todoService.create(title);
    }
  
    @Patch(':id')
    async update(
      @Param('id') id: string,
      @Body('title') title: string,
      @Body('completed') completed: boolean,
      ): Promise<Todo> {

      return this.todoService.update(parseInt(id), title, completed);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Todo> {
      return this.todoService.delete(parseInt(id));
    }
}
