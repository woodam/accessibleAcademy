/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      BASE_API: string
    }
  }
}

export {}
