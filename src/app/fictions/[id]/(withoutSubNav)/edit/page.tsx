import { FictionResponse } from "@/type/fiction";
import EditFictionWrapper from "@components/fiction/edit/editFictionWrapper";

export default async function EditFiction({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const fallbackData = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/fictions/${id}`
  )
    .then((res) => res.json())
    .then((data) => data as FictionResponse);

  return <EditFictionWrapper fallbackData={fallbackData} />;
}
