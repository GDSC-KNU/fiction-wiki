import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

// import { NextApiResponse } from "next";
// import { NextApiRequest } from "next";
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { method, query, body } = req;
//   // Check for secret to confirm this is a valid request

//   if (query.secret !== process.env.REVALIDATION_TOKEN) {
//     return res.status(401).json({ message: "Invalid token" });
//   }

//   try {
//     if (!body) {
//       res.status(400).send("Bad reqeust (no body)");
//       return;
//     }
//     const idToRevalidate = body.id;
//     const type = body.type;

//     // console.log(idToRevalidate, type);

//     // this should be the actual path not a rewritten path
//     // e.g. for "/products/[slug]" this should be "/products/1"

//     if (type === "edit") {
//       await res.revalidate(`/fictions/${idToRevalidate}`);
//       // console.log("revalidated");
//     } else {
//       await res.revalidate(`/fictions`);
//       await res.revalidate(`/fictions/${idToRevalidate}`);
//     }

//     return res.json({ revalidated: true });
//   } catch (err) {
//     // console.log(err);
//     // If there was an error, Next.js will continue
//     // to show the last successfully generated page
//     return res.status(500).send("Error revalidating");
//   }
// }

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const tag = request.nextUrl.searchParams.get("tag");

  if (secret !== process.env.REVALIDATION_TOKEN) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  if (!tag) {
    return NextResponse.json({ message: "Missing tag param" }, { status: 400 });
  }

  revalidateTag(tag);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
