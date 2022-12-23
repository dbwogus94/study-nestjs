import { ApiControllerDocument } from '@lib/common';
import {
  Body,
  ConflictException,
  Controller,
  Get,
  HttpCode,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { API_DOC_TYPE } from './constant/document.constant';
import { DocumentHelper } from './decorator/document.decorator';
import { LoginRequestDTO } from './dto/request/login-request.dto';
import { SignupRequestDTO } from './dto/request/signup-request.dto';
import { UserService } from '../user/user.service';

@ApiControllerDocument('auth')
@Controller('/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @DocumentHelper(API_DOC_TYPE.SIGNUP)
  @HttpCode(204)
  @Post('/singup')
  async signup(@Body() signupDto: SignupRequestDTO) {
    const { username } = signupDto;
    const user = this.userService.findUser(username);
    if (user) {
      throw new ConflictException(
        `User with username ${username} already exists`,
      );
    }
    this.userService.createUser(signupDto);
  }

  @DocumentHelper(API_DOC_TYPE.LOGIN)
  @HttpCode(201)
  @Post('/login')
  login(@Body() loginDto: LoginRequestDTO) {
    const { username, password } = loginDto;
    const user = this.userService.findUser(username);
    if (user) {
      throw new UnauthorizedException();
    }

    const checkPassword = this.authService.verifyHashed(
      user.password,
      password,
    );
    if (!checkPassword) {
      throw new UnauthorizedException();
    }
    const { accessToken, refreshToken } = this.authService.issueToken(username);
    // refreshToken 저장

    return { accessToken };
  }

  @DocumentHelper(API_DOC_TYPE.ME)
  @Get('/me')
  me() {
    return this.authService.me();
  }

  @DocumentHelper(API_DOC_TYPE.REFRESH)
  @Get('/refresh')
  refresh() {
    return this.authService.refresh();
  }

  @DocumentHelper(API_DOC_TYPE.LOGOUT)
  @Get('/logout')
  logout() {
    return this.authService.logout();
  }
}
