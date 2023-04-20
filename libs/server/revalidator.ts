import axios from "axios";
import { URL } from "@constants/url";

export default async function revalidator(
  id: string | string[] | undefined,
  type: string
) {
  // await axios.post(
  //   `${process.env.NEXTAUTH_URL}${URL.REVALIDATE}?secret=${process.env.REVALIDATION_TOKEN}`,
  //   { id, type },
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );
  await fetch(
    `${process.env.NEXTAUTH_URL}/${URL.REVALIDATE}?secret=${process.env.REVALIDATION_TOKEN}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, type }),
    }
  );
  return;
}
