import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateNotificationDto } from "@server/notification/dto/createNotification.dto";

import { NotificationService } from "./notification.service";

@Controller("notification")
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  async createNotification(
    @Body() createNotificationDto: CreateNotificationDto,
  ) {
    return this.notificationService.create(createNotificationDto);
  }

  @Get()
  async getAllNotifications() {
    return this.notificationService.findAll();
  }
}
