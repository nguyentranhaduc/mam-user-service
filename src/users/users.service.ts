import { Inject, Injectable } from '@nestjs/common';
import {DATABASE} from '../database/database.token.js'
import type { Database } from '../database/database.interface.js';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DATABASE)
    private readonly database: Database,
  ) {}

  async findUser(id: string) {
    // use database here
  }
}