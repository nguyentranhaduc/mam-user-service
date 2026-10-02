import { Injectable } from '@nestjs/common';
import { PasswordHasherInterface } from '../../application/password-hasher.interface.js';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptPasswordHasher implements PasswordHasherInterface {
    async hash(rawPassword: string): Promise<string> {
        const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS);
        return await bcrypt.hash(rawPassword, saltRounds);
    }

    async compare(rawPassword: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(rawPassword, hashedPassword);
    }
}