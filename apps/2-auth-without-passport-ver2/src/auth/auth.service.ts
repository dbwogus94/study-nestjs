import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

type JwtPayload = { username: string };

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  issueToken(username: string) {
    throw new Error('미구현 API');
    const jwtPayload: JwtPayload = { username: username };
    // 리프레시 토큰 발급 필요
    return { accessToken: this.jwtService.sign(jwtPayload), refreshToken: '' };
  }

  async verifyHashed(hashedPassword: string, plainPassword: string) {
    try {
      // TODO: 리턴값 확인 필요
      await argon2.verify(hashedPassword, plainPassword);
      return true;
    } catch (error) {
      return false;
    }
  }

  me() {
    throw new Error('미구현 API');
  }

  refresh() {
    throw new Error('미구현 API');
  }

  logout() {
    throw new Error('미구현 API');
  }
}
