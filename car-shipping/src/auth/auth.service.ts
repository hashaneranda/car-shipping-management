// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../feature/user/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    return this.usersService.validateUser(username, password);
  }

  async login(user: any) {
    console.log('user----', user.username, user._id);

    const payload = { username: user.username, sub: user._id };
    return {
      username: user.username,
      name: user.name,
      access_token: this.jwtService.sign(payload),
    };
  }
}
