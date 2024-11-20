import { IsNotEmpty, IsString } from "class-validator";

export class CreateChatDto {
  @IsNotEmpty()
  senderId: number;

  @IsNotEmpty()
  receiverId: number;

  @IsNotEmpty()
  academyId: number;

  @IsString()
  @IsNotEmpty()
  message: string;
}
