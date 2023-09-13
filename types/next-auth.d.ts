import type { DefaultUser } from "next-auth";

interface AccountInfo {
  provider: string;
  type: string;
  providerAccountId: string;
  access_token: string;
  expires_at: number;
  scope: string;
  token_type: string;
  id_token: string;
}

interface UserInfo {
  id: string;
  phone: null | string;
  email: string;
  name: string;
  avatar: null | string;
  createdAt: string;
  updatedAt: string;
  emailVerified: null | string;
  image: string;
  mbti: string;
  sex: string;
  clientID: string;
  clientKey: string;
  nickname: string;
  userLevel: number;
}

interface ProfileInfo {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  at_hash: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  locale: string;
  iat: number;
  exp: number;
}

interface Token {
  name: string;
  email: string;
  picture: string;
  sub: string;
}

interface CompleteToken {
  token: Token;
  user: UserInfo;
  account: AccountInfo;
  profile: ProfileInfo;
  isNewUser: boolean;
  trigger: string;
  iat: number;
  exp: number;
  jti: string;
}

declare module "next-auth" {
  interface Session {
    user?: DefaultUser & {
      id: string;
      mbti?: string;
      sex?: string;
      nickname?: string;
    };
  }
  interface JWT {
    token: Token;
    user: UserInfo;
    account: AccountInfo;
    profile: ProfileInfo;
    isNewUser: boolean;
    trigger: string;
    iat: number;
    exp: number;
    jti: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    token: Token;
    user: UserInfo;
    account: AccountInfo;
    profile: ProfileInfo;
    isNewUser: boolean;
    trigger: string;
    iat: number;
    exp: number;
    jti: string;
  }
}
