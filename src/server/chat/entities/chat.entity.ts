import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Academy } from "../../academy/entities/academy.entity";
import { User } from "../../user/entities/user.entity";

@Entity("Chat")
export class Chat {
  @PrimaryGeneratedColumn()
  chatId: number;

  @ManyToOne(() => User, (user) => user.sentChats, { onDelete: "CASCADE" })
  sender: User;

  @ManyToOne(() => User, (user) => user.receivedChats, { onDelete: "CASCADE" })
  receiver: User;

  @ManyToOne(() => Academy, (academy) => academy.chats, { onDelete: "CASCADE" })
  academy: Academy;

  @Column({ type: "text", nullable: false })
  message: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  timestamp: Date;
}
