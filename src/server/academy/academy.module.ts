import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AcademyController } from "./academy.controller";
import { AcademyService } from "./academy.service";
import { Academy } from "./entities/academy.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Academy])],
  controllers: [AcademyController],
  providers: [AcademyService],
})
export class AcademyModule {}
