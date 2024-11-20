import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Chat } from "../../chat/entities/chat.entity";
import { LearningRecord } from "../../learning/entities/learningRecord.entity";
import { NotificationReport } from "../../notification/entities/notificationReport.entity";

@Entity("Academy")
export class Academy {
  @PrimaryGeneratedColumn()
  academyId: number;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  address: string;

  @Column({ type: "varchar", length: 15, nullable: true })
  phoneNumber: string;

  @Column({ type: "varchar", length: 100, unique: true })
  email: string;

  @Column({ type: "varchar", length: 255 })
  password: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  website: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @OneToMany(() => Chat, (chat) => chat.academy)
  chats: Chat[];

  @OneToMany(() => NotificationReport, (notification) => notification.academy)
  notifications: NotificationReport[];

  @OneToMany(() => LearningRecord, (learningRecord) => learningRecord.academy)
  learningRecords: LearningRecord[];
}
