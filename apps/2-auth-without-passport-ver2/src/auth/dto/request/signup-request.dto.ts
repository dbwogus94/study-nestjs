import { PropertyHelper } from '@app/2-auth-without-passport-ver2/user/decorator';
import { User } from '@app/2-auth-without-passport-ver2/user/entity';

type SingupRequest = Pick<User, 'password' | 'username' | 'email'>;

export class SingupRequestDTO implements SingupRequest {
  @PropertyHelper('password')
  password: string;
  @PropertyHelper('username')
  username: string;
  @PropertyHelper('email')
  email?: string;
}
