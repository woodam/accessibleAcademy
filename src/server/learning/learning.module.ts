import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LearningImage } from "@server/learning/entities/learningImage.entity";
import { LearningRecord } from "@server/learning/entities/learningRecord.entity";

import { LearningController } from "./learning.controller";
import { LearningService } from "./learning.service";

@Module({
  imports: [TypeOrmModule.forFeature([LearningRecord, LearningImage])],
  controllers: [LearningController],
  providers: [LearningService],
})
export class LearningModule {}
