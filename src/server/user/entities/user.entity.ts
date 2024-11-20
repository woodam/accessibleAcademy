import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Chat } from "../../chat/entities/chat.entity";
import { NotificationReport } from "../../notification/entities/notificationReport.entity";

@Entity("User")
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ type: "varchar", length: 100, unique: true })
  email: string;

  @Column({ type: "varchar", length: 255 })
  password: string;

  @Column({
    type: "enum",
    enum: ["STUDENT", "PARENT", "ADMIN"],
    default: "STUDENT",
  })
  role: string;

  @Column({ type: "varchar", length: 15, nullable: true })
  phoneNumber: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  address: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  dateJoined: Date;

  @OneToMany(() => Chat, (chat) => chat.sender)
  sentChats: Chat[];

  @OneToMany(() => Chat, (chat) => chat.receiver)
  receivedChats: Chat[];

  @OneToMany(() => NotificationReport, (notification) => notification.user)
  notifications: NotificationReport[];
}
