import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  // Chamamos o nosso "Segurança" para trabalhar aqui na porta
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK) // Retorna status 200 (Sucesso) em vez de 201 (Criado)
  @Post('login') // A rota final será: POST /auth/login
  login(@Body() body: { email: string; password: string }) {
    // Pega o email e senha do corpo da requisição e joga para o serviço verificar
    return this.authService.login(body.email, body.password);
  }
}