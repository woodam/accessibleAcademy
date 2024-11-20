import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Academy } from "../../academy/entities/academy.entity";
import { User } from "../../user/entities/user.entity";
import { LearningImage } from "./learningImage.entity";

@Entity("LearningRecord")
export class LearningRecord {
  @PrimaryGeneratedColumn()
  recordId: number;

  @ManyToOne(() => User, (user) => user.notifications, { onDelete: "CASCADE" })
  user: User;

  @ManyToOne(() => Academy, (academy) => academy.learningRecords, {
    onDelete: "CASCADE",
  })
  academy: Academy;

  @Column({ type: "date", nullable: false })
  date: string;

  @Column({ type: "text", nullable: true })
  content: string;

  @Column({ type: "text", nullable: true })
  teacherNotes: string;

  @OneToMany(() => LearningImage, (image) => image.record)
  images: LearningImage[];
}
