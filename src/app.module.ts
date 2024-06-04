import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AccountModule } from './account/account.module';
import { UserEntity } from './user/user.entity';
import { AccountEntity } from './account/account.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'gloiresalva',
      database: 'nextAuth',
      entities: [AccountEntity, UserEntity],
      synchronize: true,
    }),
    UserModule,
    AccountModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
