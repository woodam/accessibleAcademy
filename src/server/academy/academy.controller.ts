import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateAcademyDto } from "@server/academy/dto/createAcademy.dto";

import { AcademyService } from "./academy.service";
import { Academy } from "./entities/academy.entity";

@Controller("academy")
export class AcademyController {
  constructor(private readonly academyService: AcademyService) {}

  @Post("signup")
  async createAcademy(
    @Body() createAcademyDto: CreateAcademyDto,
  ): Promise<Academy> {
    return this.academyService.create(createAcademyDto);
  }

  @Get(":id")
  async getAcademy(@Param("id") academyId: number): Promise<Academy> {
    return this.academyService.findById(academyId);
  }

  @Get()
  async getAllAcademies(): Promise<Academy[]> {
    return this.academyService.findAll();
  }
}
