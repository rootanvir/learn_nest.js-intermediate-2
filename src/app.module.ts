import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [UsersModule, TweetModule, AuthModule, TypeOrmModule.forRootAsync({
    imports: [],
    inject: [],
    useFactory: () => ({
      type: 'postgres',
      //entities: [User],
      autoLoadEntities: true,
      synchronize: true,
      host: 'localhost',
      username: 'postgres',
      password: '1234',
      database: 'nestjs',
    })

  }), ProfileModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule { }
