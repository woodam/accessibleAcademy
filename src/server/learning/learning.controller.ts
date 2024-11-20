import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateLearningRecordDto } from "@server/learning/dto/createLearningRecord.dto";

import { LearningService } from "./learning.service";

@Controller("learning")
export class LearningController {
  constructor(private readonly learningService: LearningService) {}

  @Post()
  async createRecord(@Body() createLearningRecordDto: CreateLearningRecordDto) {
    return this.learningService.create(createLearningRecordDto);
  }

  @Get()
  async getAllRecords() {
    return this.learningService.findAll();
  }
}
