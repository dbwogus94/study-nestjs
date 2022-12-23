import { PropertyHelper } from '@app/2-auth-without-passport-ver2/user/decorator';
import { User } from '@app/2-auth-without-passport-ver2/user/entity';

type LoginRequest = Pick<User, 'password' | 'username' | 'email'>;

export class LoginRequestDTO implements LoginRequest {
  @PropertyHelper('username')
  username: string;
  @PropertyHelper('password')
  password: string;
}
