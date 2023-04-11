import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  // console.log(req?.query);
  // console.log("hey");
  if (req.query.secret !== process.env.SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/products/[slug]" this should be "/products/1"
    await res.revalidate(`/fictions/${""}`);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
