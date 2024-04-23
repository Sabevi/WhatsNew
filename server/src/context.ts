import { PrismaClient } from "@prisma/client"


export type Context = {
  dataSources: {
    db: PrismaClient
  }
}