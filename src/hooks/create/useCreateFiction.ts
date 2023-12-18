import { useState } from "react";
import useMutation from "@libs/client/useMutation";

import { CreateFictionMutation, CreateFictionForm } from "@/type/fiction";

export function useCreateFiction() {
  const [createFiction, { loading, data, error }] =
    useMutation<CreateFictionMutation>("/api/fictions");

  const [isCreatingLoading, setLocalLoading] = useState(false);

  const isImageValid = (image: File[]): image is File[] =>
    image?.length > 0 && image?.[0] instanceof File;

  const getImageIdByUpload = async (file: File, title: string) => {
    const uploadURL = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/files`)
      .then((res) => res.json())
      .then((data) => data.uploadURL);

    const form = new FormData();
    form.append("file", file, title);

    const result = await fetch(uploadURL, { method: "POST", body: form }).then(
      (res) => res.json()
    );

    return result.result.id;
  };

  const uploadImageAndCreateFiction = async (inputData: any, md: any) => {
    // inputData에 이미지가 있다면
    // /api/files에 요청을 보내서 클라우드플레어 upload URL을 받아온다.(GET)
    // body에 form을넣어서 upload URL로 요청을 보낸다.(POST)
    // Cloudflare에 이미지가 성공적으로 업르도되고 image에 대한 id가 반환된다.
    // post 요청의 결과 Result를 받아서 id를 추출한다.
    // id가 성공적으로 반환되었다면 id를 통해 createFiction 실행
    // creatFiction이 성공했다면 fiction ID로 router.push()

    if (!isImageValid(inputData.image))
      return alert("이미지를 업로드 해주세요.");

    setLocalLoading(true);

    try {
      const imageId = await getImageIdByUpload(
        inputData.image[0],
        inputData.title
      );

      if (!imageId) throw new Error("Image id is empty");

      const createFictionResult = await createFiction(
        { ...inputData, image: imageId, setup: md },
        "POST"
      );

      const jsonResult = await JSON.parse(createFictionResult);
      const fictionId = jsonResult.fiction.id;

      return fictionId;
    } catch (error) {
      setLocalLoading(false);
      console.log(error);
    } finally {
      setLocalLoading(false);
    }
  };

  return { uploadImageAndCreateFiction, isCreatingLoading };
}
