import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateChatDto } from "@server/chat/dto/createChat.dto";

import { ChatService } from "./chat.service";

@Controller("chat")
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async createChat(@Body() createChatDto: CreateChatDto) {
    return this.chatService.create(createChatDto);
  }

  @Get()
  async getAllChats() {
    return this.chatService.findAll();
  }

  @Get("academy/:id")
  async getChatsByAcademy(@Param("id") academyId: number) {
    return this.chatService.findByAcademy(academyId);
  }
}
