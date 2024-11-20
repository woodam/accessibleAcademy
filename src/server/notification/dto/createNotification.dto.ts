import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateNotificationDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  academyId: number;

  @IsNotEmpty()
  dateSent: string;

  @IsString()
  @IsOptional()
  reportContent?: string;
}
