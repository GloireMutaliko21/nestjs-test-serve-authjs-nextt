import { UserEntity } from '../user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'accounts' })
export class AccountEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @Column({ type: 'varchar' })
  type: string;

  @Column({ type: 'varchar' })
  provider: string;

  @Column({ type: 'varchar' })
  providerAccountId: string;

  @Column({ type: 'varchar', nullable: true })
  refresh_token: string | null;

  @Column({ type: 'varchar', nullable: true })
  access_token: string | null;

  @Column({
    nullable: true,
    type: 'bigint',
  })
  expires_at: number | null;

  @Column({ type: 'varchar', nullable: true })
  token_type: string | null;

  @Column({ type: 'varchar', nullable: true })
  scope: string | null;

  @Column({ type: 'varchar', nullable: true })
  id_token: string | null;

  @Column({ type: 'varchar', nullable: true })
  session_state: string | null;

  @ManyToOne(() => UserEntity, (user) => user.accounts, {
    createForeignKeyConstraints: true,
  })
  user: UserEntity;
}
