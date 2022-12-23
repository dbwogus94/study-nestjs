import { Injectable } from '@nestjs/common';
import { SingupRequestDTO } from './dto/request/signup-request.dto';

@Injectable()
export class AuthService {
  signup(signupDto: SingupRequestDTO) {
    return;
  }

  login() {
    throw new Error('미구현 API');
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
