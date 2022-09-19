import {BaseEntity, Column, PrimaryGeneratedColumn} from "typeorm";

export class Task extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({

    })
    title: string;

    @Column()
    description: string;

    @Column({
        type: 'datetime',
        default: null,
    })
    created_at: Date | string;

    @Column()
    user_id: string;

    @Column({
        type: 'datetime',
        default: null,
    })
    expiration: Date | string;

    @Column()
    status: string;


}
