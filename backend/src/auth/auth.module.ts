import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma/prisma.module'; 

@Module({
  imports: [
    PrismaModule,
    // Configurando a "máquina de crachás" (JWT)
    JwtModule.register({
      global: true, 
      secret: 'MINHA_CHAVE_SECRETA_SUPER_SEGURA', // Assinatura que impede falsificações
      signOptions: { expiresIn: '1d' }, // O crachá expira em 1 dia (24 horas)
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}