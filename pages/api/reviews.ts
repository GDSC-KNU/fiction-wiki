import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";
const { google } = require("googleapis");

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  //   const {
  //     query: { id, page },
  //   } = req;
  //   const session = await getSession({ req });

  if (req.method === "GET") {
    //     const comments = await client.comment.findMany({
    //       take: 7,
    //       skip: typeof page === "string" ? (+page - 1) * 7 : 0,
    //       where: {
    //         fiction: {
    //           id: +id!.toString(),
    //         },
    //       },
    //     });

    //     const commentsCount = await client.comment.count({
    //       where: {
    //         fiction: {
    //           id: +id!.toString(),
    //         },
    //       },
    //     });

    const customsearch = google.customsearch("v1");
    const API_KEY = process.env.GOOGLE_API_KEY;
    const cx = process.env.GOOGLE_SEARCH_ENGINE_ID;
    const searchQuery = "학사신공 리뷰";

    const search = async (query: string) => {
      const res = await customsearch.cse.list({
        q: query,
        cx: cx,
        key: API_KEY,
        num: 5, // number of search results to return
      });
      return res.data.items;
    };

    const response = await search(searchQuery || "");
    // console.log(response);

    // const response = await fetch(
    //   `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${cx}&q=${searchQuery} 리뷰`
    // );
    // const response = await axios.get(
    //   `https://www.googleapis.com/customsearch/v1?`,
    //   {
    //     // ?key=${API_KEY}&cx=${cx}&q=${searchQuery} 리뷰
    //     key: "AIzaSyCNZO_BCtulbVQJ6GEzslNjhQUSz1BH19c",
    //     cx: cx,
    //     q: searchQuery + " 리뷰",
    //   }
    // );
    // const reviews = response.json();
    // console.log(response);

    res.json({ ok: true, reponse: response });
  } else {
    res.json({ ok: false });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
