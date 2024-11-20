import { Module } from "@nestjs/common";
import { RenderController } from "@server/render/render.contoller";
import { RenderService } from "@server/render/render.service";
import { SignModule } from "@server/render/sign/sign.module";

@Module({
  imports: [SignModule],
  providers: [RenderService],
  controllers: [RenderController],
})
export class RenderModule {}
