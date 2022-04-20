import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { NewuserModule } from './newuser/newuser.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'myblog_user',
      password: 'myblog_password',
      database: 'myblog_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),NewuserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
