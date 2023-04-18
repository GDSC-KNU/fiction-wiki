import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  callbacks: {
    // async jwt({ token, user }) {
    //   user && (token.user = user);
    //   return token;
    // },
    async session({ session, user }) {
      if (user) {
        session = {
          ...session,
          user: {
            id: user.id,
            ...session.user,
          },
        };
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
