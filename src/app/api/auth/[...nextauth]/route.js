import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

import authOption from "@/utils/authOption";

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
