import { Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
    constructor(private prisma: PrismaService){

    }

    async findAll(): Promise<Todo[]>{
        return this.prisma.todo.findMany();
    }

    async findOne(id: number): Promise<Todo | null>{
        return this.prisma.todo.findUnique({
            where: { id }
        })
    }

    async create(title: string): Promise<Todo>{
        return this.prisma.todo.create({
            data: { title }
        })
    }

    async update(id: number, title: string, completed: boolean): Promise<Todo>{
        return this.prisma.todo.update({
            where: { id },
            data: { 
                title, 
                completed
            }
        })
    }

    async delete(id: number): Promise<Todo>{
        return this.prisma.todo.delete({
            where: { id }
        })
    }
    
}
