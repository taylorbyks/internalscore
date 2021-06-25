import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Tag, User } from '../entities'

@Entity('compliments')
export class Compliment {
  @PrimaryColumn()
  readonly id: string
  
  @Column()
  user_sender: string
  @JoinColumn({ name: 'user_reciver' })
  @ManyToOne(() => User)
  userSender: User

  @Column()
  user_reciver: string
  @JoinColumn({ name: 'user_reciver' })
  @ManyToOne(() => User)
  userReciver: User

  @Column()
  tag_id: string
  @JoinColumn({ name: 'tag_id' })
  @ManyToOne(() => Tag)
  tag: Tag

  @Column()
  message: string
  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
