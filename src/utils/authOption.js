import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const authOption = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    // async encode() {},
    // async decode() {},
  },
  callbacks: {
    // async session({ session, user }) {
    //   if (user) {
    //     session = {
    //       ...session,
    //       user: {
    //         id: user.id,
    //         ...session.user,
    //         mbti: user.mbti,
    //         sex: user.sex || "",
    //         userLevel: user.userLevel,
    //         nickname: user.nickname,
    //       },
    //     };
    //     // console.log(user);
    //   }
    //   return session;
    // },
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: user.id,
          ...(token.user || {}),
          mbti: user.mbti,
          sex: user.sex || "",
          userLevel: user.userLevel,
          nickname: user.nickname,
        };
      }
      return token;
    },
  },
};

export default authOption;
