import { PrismaClient } from "@prisma/client"


export type Context = {
  token: string
  dataSources: {
    db: PrismaClient
  }
}