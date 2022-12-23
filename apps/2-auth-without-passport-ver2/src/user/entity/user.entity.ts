import { Util } from '@lib/common';
import { Exclude, Expose } from 'class-transformer';

export type UserWithoutPassword = Omit<User, 'password'>;

export class User {
  @Expose()
  id!: string;
  @Expose()
  username!: string;
  @Exclude()
  password!: string;
  @Expose()
  email?: string;
  @Expose()
  createdAt!: Date;
  @Expose()
  updatedAt!: Date;

  @Exclude()
  toUserWithoutPassword(): UserWithoutPassword {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...other } = this;
    return Util.toInstance(User, other);
  }
}
