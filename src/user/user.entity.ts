import { AccountEntity } from '../account/account.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })
  name: string | null;

  @Column({ type: 'varchar', nullable: true })
  email: string | null;

  @Column({ type: 'varchar', nullable: true })
  emailVerified: string | null;

  @Column({ type: 'varchar', nullable: true })
  image: string | null;

  @OneToMany(() => AccountEntity, (account) => account.userId)
  accounts: AccountEntity[];
}
