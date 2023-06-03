import { NextRequest, NextResponse } from "next/server";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

type method = "GET" | "POST" | "DELETE" | "PUT";

interface ConfigType {
  methods: method[];
  handler: (req: NextRequest, res: NextResponse) => void;
  isPrivate?: boolean;
  isForAdmin?: boolean;
}

export default function withHandler({
  methods,
  isPrivate = false,
  isForAdmin,
  handler,
}: ConfigType) {
  return async function (req: NextRequest, res: NextResponse): Promise<any> {
    // if (isForAdmin === true) {
    //   return res
    //     .status(401)
    //     .json({ ok: false, error: "관리자만 접근 가능합니다." });
    // }

    // method not allowed
    if (req.method && !methods.includes(req.method as any)) {
      return;
    }

    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return;
    }
  };
}
