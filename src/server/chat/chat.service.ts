import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateChatDto } from "@server/chat/dto/createChat.dto";
import { Repository } from "typeorm";

import { Chat } from "./entities/chat.entity";

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,
  ) {}

  async create(createChatDto: CreateChatDto): Promise<Chat> {
    const chat = this.chatRepository.create(createChatDto);
    return this.chatRepository.save(chat);
  }

  async findAll(): Promise<Chat[]> {
    return this.chatRepository.find({
      relations: ["sender", "receiver", "academy"],
    });
  }

  async findByAcademy(academyId: number): Promise<Chat[]> {
    return this.chatRepository.find({
      where: { academy: { academyId } },
      relations: ["sender", "receiver", "academy"],
    });
  }
}
