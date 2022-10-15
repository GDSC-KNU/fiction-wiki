import { PrismaClient } from "@prisma/client";

declare global {
  var client: PrismaClient | undefined;
}

// declare global {
//   var prisma: PrismaClient | undefined;
// }

const client = global.client || new PrismaClient();

if (process.env.NODE_ENV === "development") global.client = client;
// if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default new PrismaClient();
