import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './newusers.entity';

@Injectable()
export class NewuserService extends TypeOrmCrudService<User> {
    constructor(@InjectRepository(User) repo) {
        super(repo)
      }
}

