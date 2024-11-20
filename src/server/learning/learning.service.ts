import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateLearningRecordDto } from "@server/learning/dto/createLearningRecord.dto";
import { LearningRecord } from "@server/learning/entities/learningRecord.entity";
import { Repository } from "typeorm";

@Injectable()
export class LearningService {
  constructor(
    @InjectRepository(LearningRecord)
    private readonly learningRecordRepository: Repository<LearningRecord>,
  ) {}

  async create(
    createLearningRecordDto: CreateLearningRecordDto,
  ): Promise<LearningRecord> {
    const record = this.learningRecordRepository.create(
      createLearningRecordDto,
    );
    return this.learningRecordRepository.save(record);
  }

  async findAll(): Promise<LearningRecord[]> {
    return this.learningRecordRepository.find({
      relations: ["user", "academy"],
    });
  }
}
