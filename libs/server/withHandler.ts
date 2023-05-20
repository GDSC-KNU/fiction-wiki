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
  isForAdmin?: boolean;
}

export default function withHandler({
  methods,
  isPrivate = false,
  isForAdmin,
  handler,
}: ConfigType) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<any> {
    const nextAuthsession = await getServerSession(req, res, authOptions);

    // if (isForAdmin === true) {
    //   return res
    //     .status(401)
    //     .json({ ok: false, error: "관리자만 접근 가능합니다." });
    // }

    // method not allowed
    if (req.method && !methods.includes(req.method as any)) {
      return res.status(405).end();
    }
    // Public페이지에서, credentialSession 혹은 nextSession 중 하나라도 없는 경우
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
