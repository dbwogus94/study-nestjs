import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
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
