import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  
  async create(userId: number, title: string, description?: string) {
    return this.prisma.task.create({
      data: { title, description, userId },
    });
  }

  
  async findAll(userId: number) {
    return this.prisma.task.findMany({
      where: { userId: userId },
      orderBy: { createdAt: 'desc' }, 
    });
  }
  
  async update(id: number, data: { title?: string; description?: string; isCompleted?: boolean }) {
    return this.prisma.task.update({
      where: { id },
      data: data,
    });
  }

  async remove(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}