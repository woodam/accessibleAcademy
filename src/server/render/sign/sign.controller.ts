import { Controller, Get, Render } from "@nestjs/common";

@Controller()
export class SignController {
  @Get("/signup")
  @Render("signup")
  renderSignup() {}
}
