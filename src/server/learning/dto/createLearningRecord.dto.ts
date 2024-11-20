import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateLearningRecordDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  academyId: number;

  @IsNotEmpty()
  date: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  teacherNotes?: string;
}
