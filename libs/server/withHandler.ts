import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

type method = "GET" | "POST" | "DELETE" | "PUT";

interface ConfigType {
  methods: method[];
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
}

export default function withHandler({
  methods,
  isPrivate = false,
  handler,
}: ConfigType) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<any> {
    // if (!req.session.user) {
    //   console.log("not logged in");
    //   return res.status(200).json({ ok: false, error: "Plase Log in" });
    // }
    // console.log(req.method);
    // console.log(req.session);
    const nextAuthsession = await getServerSession(req, res, authOptions);
    // console.log(nextAuthsession);

    if (req.method && !methods.includes(req.method as any)) {
      return res.status(405).end();
    }
    if (isPrivate && !(req.session?.user || nextAuthsession)) {
      return res.status(401).json({ ok: false, error: "Plase Log in" });
    }
    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
