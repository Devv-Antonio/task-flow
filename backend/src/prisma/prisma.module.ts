import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // <--- Adicionamos isso para não precisar importar em todo lugar
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // <--- Exportamos para quem quiser usar
})
export class PrismaModule {}