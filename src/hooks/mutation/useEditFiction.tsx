import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import useMutation from "@libs/client/useMutation";
import { EditFictionForm, EditFictionMutation } from "@/type/fiction";

export default function UseEditFiction() {
  const params = useParams();
  const { id: fictionId } = params;
  const [editLoading, setEditLoading] = useState(false);

  const [mutate, { loading, data, error, isSuccess }] =
    useMutation<EditFictionMutation>(`/api/fictions/${fictionId}`);

  async function editFiction({
    inputData,
    md,
    image: existingFictionImage,
  }: {
    inputData: EditFictionForm;
    md: string;
    image: string | undefined;
  }) {
    // place for useThrowNewCustomError

    if (
      inputData.image &&
      inputData.image.length > 0 &&
      inputData.image[0] instanceof File
    ) {
      if (!existingFictionImage) throw new Error("이미지가 없습니다.");
      else {
        await fetch(`/api/files`, {
          method: "DELETE",
          body: JSON.stringify({ imageId: existingFictionImage }),
        });
      }

      const { uploadURL } = await (await fetch(`/api/files`)).json();
      const form = new FormData();
      form.append("file", inputData.image[0], inputData.title);
      const {
        result: { id },
      } = await (await fetch(uploadURL, { method: "POST", body: form })).json();
      await mutate({ ...inputData, image: id, setup: md }, "PUT");
    } else {
      await mutate({ ...inputData, setup: md }, "PUT");
    }

    setEditLoading(false);
  }

  useEffect(() => {
    if (isSuccess) {
      setEditLoading(true);
      window.location.href = `/fictions/${fictionId}`;
    }
  }, [isSuccess, fictionId]);

  return { editFiction, loading: loading || editLoading, data, error };
}
