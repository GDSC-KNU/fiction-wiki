import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  // console.log(req?.method);

  if (req.method === "GET") {
    const response = await (
      await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ID}/images/v1/direct_upload`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.CF_TOKEN}`,
          },
        }
      )
    ).json();
    // console.log(response);
    res.json({
      ok: true,
      ...response.result,
    });
  }
  if (req.method === "DELETE") {
    const body = JSON.parse(req?.body);
    const imageId = await body?.imageId;
    console.log(imageId);
    const response = await (
      await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ID}/images/v1/${imageId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${process.env.CF_TOKEN}`,
          },
        }
      )
    ).json();
    console.log(response);
    res.json({
      ok: true,
      ...response.result,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET", "DELETE"],
    handler,
  })
);
