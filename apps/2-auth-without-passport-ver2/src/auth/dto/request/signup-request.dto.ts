import { PropertyHelper, User } from '../../../user';

type SingupRequest = Pick<User, 'password' | 'username' | 'email'>;

export class SingupRequestDTO implements SingupRequest {
  @PropertyHelper('password')
  password: string;
  @PropertyHelper('username')
  username: string;
  @PropertyHelper('email')
  email?: string;
}
