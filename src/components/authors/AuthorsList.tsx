"use client";
import AuthorIcon from "@public/svg/author.svg";

import { Author, Fiction } from "@prisma/client";

import { Button2 } from "@components/common/Button2";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";

interface authorWithMore extends Author {
  fictions: Fiction[];
}

export default function AuthorsList({ data }: { data: any[] }) {
  const router = useRouter();
  if (!data) return <ClipLoader size={100} />;

  const flattenedData = data.flatMap((item) => item?.["authors"]);

  const handler = (authorName: string) => {
    return router.push(`/authors/name/${authorName}`);
  };
  if (!flattenedData || flattenedData?.length < 2)
    return <ClipLoader size={100} />;

  return (
    <div className="max-w-[900px] ">
      <div className=" ">
        {flattenedData?.map((authorData: authorWithMore) => (
          <div
            key={authorData.id}
            className="  overflow-hidden border-b-[1px] border-[#E2E8F0] pb-3"
          >
            <div className=" relative flex h-[150] min-w-[104px] bg-white">
              <div
                onClick={() => handler(authorData.name)}
                className=" flex cursor-pointer justify-center"
              >
                <AuthorIcon width="90px" height="110px" />
              </div>
              <div className=" w-full flex-col space-y-2 p-2">
                <div
                  onClick={() => handler(authorData.name)}
                  className=" line-clamp-1 cursor-pointer text-lg font-bold"
                >
                  {authorData.name}
                </div>
                <div className=" line-clamp-1 space-x-1">
                  {authorData.fictions.map((fiction) => {
                    return (
                      <Button2
                        className=""
                        variant="outline"
                        size="xxs"
                        key={fiction.id}
                        onClick={() => {
                          router.push(`/fictions/${fiction.id}`);
                        }}
                      >
                        {fiction.title}
                      </Button2>
                    );
                  })}
                </div>
                <div className=" line-clamp-2 text-xs">
                  {authorData.description ? authorData.description : ""}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
