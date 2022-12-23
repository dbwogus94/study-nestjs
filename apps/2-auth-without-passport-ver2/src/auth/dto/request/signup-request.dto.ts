import { PropertyHelper } from '@app/2-auth-without-passport-ver2/user/decorator';
import { User } from '@app/2-auth-without-passport-ver2/user/entity';

type SignupRequest = Pick<User, 'password' | 'username' | 'email'>;

export class SignupRequestDTO implements SignupRequest {
  @PropertyHelper('username')
  username: string;
  @PropertyHelper('password')
  password: string;
  @PropertyHelper('email')
  email?: string;
}
