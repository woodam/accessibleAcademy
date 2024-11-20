import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { LearningRecord } from "./learningRecord.entity";

@Entity("LearningImage")
export class LearningImage {
  @PrimaryGeneratedColumn()
  imageId: number;

  @ManyToOne(() => LearningRecord, (record) => record.images, {
    onDelete: "CASCADE",
  })
  record: LearningRecord;

  @Column({ type: "varchar", length: 255, nullable: false })
  imageUrl: string;
}
