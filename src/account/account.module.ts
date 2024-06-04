import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from './account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity])],
  exports: [TypeOrmModule],
  providers: [AccountService],
  controllers: [AccountController],
})
export class AccountModule {}
