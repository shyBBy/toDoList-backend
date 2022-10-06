import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  database: 'todolist',
  name: 'tasks',
})

export class TaskEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({
    type: 'datetime',
    default: null,
  })
  createdAt: Date | string;

  @Column({
    type: 'datetime',
    default: null,
  })
  editedAt: Date | string;

  @Column()
  createdByUserId: string;

  @Column({
    type: 'datetime',
    default: null,
  })
  expiration: Date | string;

  @Column({
    default: 'Nowy'
  })
  status: string;

  @Column()
  priority: string;
}
