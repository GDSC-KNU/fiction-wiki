import { NextRequest, NextResponse } from "next/server";

// async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseType>
// ) {
//   // console.log(req?.method);

//   if (req.method === "GET") {
//   }
//   if (req.method === "DELETE") {
//   }

//   export default withApiSession(
//     withHandler({
//       methods: ["GET", "DELETE"],
//       handler,
//     })
//   );

export async function GET(req: NextRequest) {
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

  return NextResponse.json({
    ok: true,
    ...response.result,
  });
}

export async function DELETE(req: NextRequest) {
  const { imageId } = await req.json();

  if (!imageId)
    return NextResponse.json({ ok: false, message: "imageId is required" });

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
  return NextResponse.json({
    ok: true,
    ...response.result,
  });
}
