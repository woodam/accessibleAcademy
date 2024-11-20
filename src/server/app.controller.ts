import { Controller, Get, HttpCode, Render } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("/healthz")
  @HttpCode(200)
  health() {}

  @Render("/")
  @Get("/")
  renderTest() {
    return {
      message: "test",
    };
  }
}
