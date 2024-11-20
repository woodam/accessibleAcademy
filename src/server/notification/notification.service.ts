import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateNotificationDto } from "@server/notification/dto/createNotification.dto";
import { NotificationReport } from "@server/notification/entities/notificationReport.entity";
import { Repository } from "typeorm";

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(NotificationReport)
    private readonly notificationRepository: Repository<NotificationReport>,
  ) {}

  async create(
    createNotificationDto: CreateNotificationDto,
  ): Promise<NotificationReport> {
    const notification = this.notificationRepository.create(
      createNotificationDto,
    );
    return this.notificationRepository.save(notification);
  }

  async findAll(): Promise<NotificationReport[]> {
    return this.notificationRepository.find({ relations: ["user", "academy"] });
  }
}
