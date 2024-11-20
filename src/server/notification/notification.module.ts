import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NotificationReport } from "@server/notification/entities/notificationReport.entity";

import { NotificationController } from "./notification.controller";
import { NotificationService } from "./notification.service";

@Module({
  imports: [TypeOrmModule.forFeature([NotificationReport])],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
