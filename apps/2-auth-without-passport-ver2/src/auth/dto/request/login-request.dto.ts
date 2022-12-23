import { PropertyHelper, User } from '../../../user';

type LoginRequest = Pick<User, 'password' | 'username' | 'email'>;

export class LoginRequestDTO implements LoginRequest {
  @PropertyHelper('username')
  username: string;
  @PropertyHelper('password')
  password: string;
}
