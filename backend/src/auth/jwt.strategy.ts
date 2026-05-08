
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // Ensina o sistema a procurar o token no cabeçalho (Header) da requisição
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Rejeita tokens vencidos
      secretOrKey: 'MINHA_CHAVE_SECRETA_SUPER_SEGURA', // TEM QUE SER IGUAL AO DO auth.module.ts
    });
  }

  // Se o token for válido, ele extrai os dados de dentro dele e devolve
  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}