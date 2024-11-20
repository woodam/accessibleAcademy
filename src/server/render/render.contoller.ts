import { Controller } from "@nestjs/common";
import { RenderService } from "@server/render/render.service";

@Controller()
export class RenderController {
  constructor(private readonly renderService: RenderService) {}
}
