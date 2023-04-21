import { Redis } from "@upstash/redis";

const redisConfig = {
  url:
    process.env.UPSTASH_REDIS_REST_URL ??
    "https://apn1-sacred-manatee-34786.upstash.io",
  token:
    process.env.UPSTASH_REDIS_REST_TOKEN ??
    "AYfiACQgMWQxNjcyY2QtZWM4MS00NzQxLTgyZGItZGY1MjYwNDEwZGExOWJmODI1MWQzNGRlNDUyMDkzODM2NmE3NGQxZThiMmM=",
};

//   {
//     url:
//       process.env.UPSTASH_REDIS_REST_URL ||
//       "https://apn1-sacred-manatee-34786.upstash.io",
//     token:
//       process.env.UPSTASH_REDIS_REST_TOKEN ||
//       "AYfiACQgMWQxNjcyY2QtZWM4MS00NzQxLTgyZGItZGY1MjYwNDEwZGExOWJmODI1MWQzNGRlNDUyMDkzODM2NmE3NGQxZThiMmM=",
//   }

const redis = new Redis(redisConfig);

export default redis;
