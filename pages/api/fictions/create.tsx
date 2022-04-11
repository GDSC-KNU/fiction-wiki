import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/client/useMutation";
import withHandler from "@libs/server2/withHandler";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  console.log(req.body);
  res.json({ ok: true });
}

export default withHandler("POST", handler);
