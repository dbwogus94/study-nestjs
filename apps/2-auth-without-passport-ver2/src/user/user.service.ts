import { Util } from '@lib/common';
import { Injectable } from '@nestjs/common';
import { User, UserWithoutPassword } from './entity';
import * as argon2 from 'argon2';
import { SignupRequestDTO } from '../auth/dto/request/signup-request.dto';

@Injectable()
export class UserService {
  private userStorage: User[] = [];

  findUser(username: string): User | undefined {
    return this.userStorage.find((user) => user.username === username);
  }

  createUser(signupDto: SignupRequestDTO): UserWithoutPassword {
    const newUser = Util.toInstance(User, {
      ...signupDto,
      password: argon2.hash(signupDto.password),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    this.userStorage.push(newUser);
    return newUser.toUserWithoutPassword();
  }
}
