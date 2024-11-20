import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateAcademyDto } from "@server/academy/dto/createAcademy.dto";
import { Repository } from "typeorm";

import { Academy } from "./entities/academy.entity";

@Injectable()
export class AcademyService {
  constructor(
    @InjectRepository(Academy)
    private readonly academyRepository: Repository<Academy>,
  ) {}

  async create(createAcademyDto: CreateAcademyDto): Promise<Academy> {
    const academy = this.academyRepository.create(createAcademyDto);
    return this.academyRepository.save(academy);
  }

  async findById(academyId: number): Promise<Academy> {
    return this.academyRepository.findOne({ where: { academyId } });
  }

  async findAll(): Promise<Academy[]> {
    return this.academyRepository.find();
  }
}
