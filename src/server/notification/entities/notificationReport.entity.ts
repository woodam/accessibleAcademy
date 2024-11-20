import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Academy } from "../../academy/entities/academy.entity";
import { User } from "../../user/entities/user.entity";

@Entity("NotificationReport")
export class NotificationReport {
  @PrimaryGeneratedColumn()
  reportId: number;

  @ManyToOne(() => User, (user) => user.notifications, { onDelete: "CASCADE" })
  user: User;

  @ManyToOne(() => Academy, (academy) => academy.notifications, {
    onDelete: "CASCADE",
  })
  academy: Academy;

  @Column({ type: "date", nullable: false })
  dateSent: string;

  @Column({ type: "text", nullable: true })
  reportContent: string;
}
