import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, pass: string) {
    // 1. Vai no banco de dados e procura alguém com esse e-mail
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    // 2. Se não achar o usuário, barra a entrada
    if (!user) {
      throw new UnauthorizedException('E-mail ou senha incorretos');
    }

    // 3. Usa o bcrypt para comparar a senha digitada com a senha embaralhada do banco
    const isPasswordValid = await bcrypt.compare(pass, user.password);

    // 4. Se a senha estiver errada, barra a entrada (mesma mensagem por segurança)
    if (!isPasswordValid) {
      throw new UnauthorizedException('E-mail ou senha incorretos');
    }

    // 5. Se chegou até aqui, é porque deu tudo certo! Hora de imprimir o crachá:
    const payload = { sub: user.id, email: user.email };
    
    return {
      // Retorna o Token JWT prontinho para o usuário
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}