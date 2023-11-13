"use client";

import useFiction from "@/hooks/useFictionProcessed";
import Link from "next/link";
import { useParams } from "next/navigation";

import { FictionResponse, preprocessedFictionData } from "@/type/fiction";
import { Button2 } from "@components/common/Button2";

export default function Keywords({
  fallbackData,
}: {
  fallbackData?: FictionResponse;
}) {
  const params = useParams();
  const fiction = useFiction({ fallbackData: fallbackData });
  const { keywords, consKeywords, mcKeywords, subKeywords } =
    fiction as preprocessedFictionData;
  return (
    <div className=" p-2">
      <div className=" mb-3 h-full w-full rounded-md sm:mb-0">
        <h2 className=" border-b-[1px] pt-1 font-bold">메인 태그</h2>
        <ul className=" inline-flex flex-wrap space-x-1 pt-2">
          {keywords?.map((item: any, index: any) => (
            <li key={index}>
              <Link href={`/search/keyword/${item}/1`} passHref>
                <Button2 variant="outline" size="xs">
                  #{item}
                </Button2>
              </Link>
            </li>
          ))}
        </ul>
        <div className=" border-b-[1px] pt-1 font-bold">주인공 태그</div>
        <ul className=" inline-flex flex-wrap space-x-1 pt-2">
          {mcKeywords.map((item: any, index: any) => (
            <li key={index}>
              <Link href={`/search/keyword/${item}/1`} passHref>
                <Button2 variant="outline" size="xs">
                  #{item}
                </Button2>
              </Link>
            </li>
          ))}
        </ul>
        <div className=" border-b-[1px] pt-1 font-bold">히로인 태그</div>
        <ul className=" inline-flex flex-wrap pt-2">
          {subKeywords.map((item: any, index: any) => (
            <li key={index}>
              <Link href={`/search/keyword/${item}/1`} passHref>
                <Button2 variant="outline" size="xs">
                  #{item}
                </Button2>
              </Link>
            </li>
          ))}
        </ul>
        <div className=" border-b-[1px] pt-1 font-bold">호불호 태그</div>
        <ul className=" inline-flex flex-wrap pt-2">
          {consKeywords.map((item: any, index: any) => (
            <li key={index}>
              <Link href={`/search/keyword/${item}/1`} passHref>
                <Button2 variant="outline" size="xs">
                  #{item}
                </Button2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
