import { Module } from '@nestjs/common';
import { NewuserService } from './newuser.service';
import { NewuserController } from './newuser.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './newusers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],

  providers: [NewuserService],
  controllers: [NewuserController],
  exports: [NewuserService]
})
export class NewuserModule {}
