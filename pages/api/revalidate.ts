import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query, body } = req;
  // Check for secret to confirm this is a valid request
  // console.log(req?.query);
  // console.log("hey");
  // console.log(query, body);
  if (method !== "POST") {
    return res
      .status(400)
      .json({ error: "Invalid HTTP method. Only POST method is allowed." });
  }

  if (query.secret !== process.env.REVALIDATION_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    if (!body) {
      res.status(400).send("Bad reqeust (no body)");
      return;
    }
    const idToRevalidate = body.id;
    const type = body.type;

    // this should be the actual path not a rewritten path
    // e.g. for "/products/[slug]" this should be "/products/1"

    if (type === "comment") {
      await res.revalidate(`/fictions/${idToRevalidate}`);
      console.log("revalidated");
    } else {
      await res.revalidate(`${process.env.NEXTAUTH_URL}/fictions`);
      await res.revalidate(
        `${process.env.NEXTAUTH_URL}/fictions/${idToRevalidate}`
      );
    }
    // await res.revalidate(`/fictions/${""}`);
    return res.json({ revalidated: true });
  } catch (err) {
    console.log(err);
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
