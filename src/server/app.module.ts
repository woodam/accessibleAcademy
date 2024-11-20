import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AcademyModule } from "@server/academy/academy.module";
import { ChatModule } from "@server/chat/chat.module";
import { LearningModule } from "@server/learning/learning.module";
import { NotificationModule } from "@server/notification/notification.module";
import { UserModule } from "@server/user/user.module";
import { RenderModule } from "nest-next";
import Next from "next";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { RenderModule as ClientRender } from "./render/render.module";

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({ dev: process.env.NODE_ENV !== "production" }),
      {
        viewsDir: null,
      },
    ),
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || "development"}`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: process.env.DB_SYNCHRONIZE === "true",
    }),
    UserModule,
    AcademyModule,
    NotificationModule,
    LearningModule,
    ChatModule,
    ClientRender,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
