import { NextApiRequest, NextApiResponse } from "Next";
import client from "../../libs/client";

export default async function handler(
    req:NextApiRequest, res:NextApiResponse
) {
    await client?.user.create({
        data: {
            email: "hi",
            name: "hi",
        },
    });

    res.json({
        ok: true,
    })
}