import './tracing'

import { NestFactory } from '@nestjs/core'
import cookieParser from 'cookie-parser'
import { WinstonModule } from 'nest-winston'
import * as winston from 'winston'

import { AppModule } from './app.module'

async function bootstrap() {
  const port = process.env.NODE_ENV === 'production' ? 3000 : 3000

  const logger = WinstonModule.createLogger({
    level: 'verbose',
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.printf(({ timestamp, level, message, ...meta }) => {
            return JSON.stringify({
              timestamp,
              level,
              message,
              ...meta, // 추가 메타데이터 포함 (예: trace ID 등)
            })
          }),
        ),
      }),
    ],
  })

  // NestJS 애플리케이션 생성 시 로거 추가
  const server = await NestFactory.create(AppModule, {
    logger, // 커스텀 로거 추가
  })

  server.use(cookieParser())
  await server.listen(port)

  console.log(`server running on localhost:${port}`)
}

bootstrap().then()
