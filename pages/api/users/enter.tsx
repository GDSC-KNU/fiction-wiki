import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "Next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };

  const user = await client.user.upsert({
    where: {
      ...payload,
    },
    create: {
      name: "Anonymous",
      ...payload,
    },
    update: {},
  });

  //   const btoken = await client.btoken.create({
  //     data: {
  //       payload: "1234",
  //       user: {
  //         connect: {
  //           id: user.id,
  //         },
  //       },
  //     },
  //   });
  //   console.log(btoken);
  //   return res.status(200).end();
}

export default withHandler("POST", handler);
