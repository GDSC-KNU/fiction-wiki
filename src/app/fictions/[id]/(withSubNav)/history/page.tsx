"use client";

import { useRouter, useParams } from "next/navigation";
import React from "react";
import useSWR from "swr";
import Image from "next/image";

import { Button2, buttonVariants } from "@components/common/Button2";

import Restore from "@public/svg/restore.svg";
import { Fiction, FictionHistory, User } from "@prisma/client";
import formatDate from "@helper/formatDate";
import Link from "next/link";
import { cn } from "@libs/util";

import useUser from "@libs/client/useUser";
import { fictionProperties } from "@constants/options";
import ClipLoader from "react-spinners/ClipLoader";

interface Data {
  fiction: Fiction;
  history: FictionHistoryWithUser[];
}

interface LogItem {
  path: string;
}

interface FictionHistoryWithUser extends FictionHistory {
  log: {
    changeLog: any[];
    charactersChanged: number;
  };
  editedBy: User;
}

export default function History() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const { user, isAdmin } = useUser();
  const fetchKey = id ? `/api/fictions/${id}/histories` : null;

  const { data } = useSWR<Data>(fetchKey);

  if (!data)
    return (
      <div className="mt-20 flex items-center justify-center">
        <ClipLoader
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );

  const { fiction, history } = data;
  const reversedHistory = [...(history || [])].reverse();

  function handleRevert(rid: number) {
    if (!user) {
      alert("로그인해야 사용 가능한 기능입니다.");
      router.push("/enter");
      return;
    }
    if (window.confirm("정말로 문서를 되돌리시겠습니까?")) {
      fetch(`/api/fictions/${id}?Rid=${rid}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          // Handle successful revert (e.g., re-fetch data or navigate to updated page)
        })
        .catch((error) => {
          console.log(error);
          // Handle error (e.g., show a message to the user)
        });
    }
  }

  return (
    <div className="mx-auto h-full w-3/4">
      <div className="my-2 flex h-1/6 w-full flex-col justify-center">
        <h1 className="text-center text-3xl font-bold md:text-4xl">
          위키 히스토리
        </h1>
        <p className="text-center text-xs md:text-xl">
          위키 편집 내역을 확인할 수 있습니다.
        </p>
      </div>
      <div className="flex h-auto flex-row rounded-lg border-2 md:w-full">
        <div className="hidden w-auto md:flex"></div>
        <div className="m-5 ml-8 h-auto w-5/6">
          <h1 className="line-clamp-1 text-xl font-bold">{fiction.title}</h1>
          <p className="mt-2 line-clamp-3 w-auto text-sm">
            {`${fiction.setup.slice(7, 150)} ...`}
          </p>
        </div>
      </div>
      <div className=" py-4">
        {reversedHistory.map((item, index) => (
          <div
            key={index}
            className=" mb-2 border-b-[1px] pb-2 last:border-b-0"
          >
            <div className="mb-2 flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <div>
                  <span className=" mr-4">{`${history.length - index}. ${
                    item.id
                  }  -`}</span>
                </div>
                <div>
                  <Image
                    className=" mr-2 rounded-full"
                    src={item.editedBy.image || ""}
                    width={26}
                    height={26}
                    alt={item.editedBy.nickname || ""}
                  />
                </div>
                <h2 className="text-sm">{item.editedBy.nickname}</h2>
              </div>
              <p className="text-xs">{formatDate(item.updatedAt, true)}</p>
            </div>
            <div className=" flex flex-col justify-between lg:flex-row">
              <div className=" mb-2 flex lg:mb-0">
                <div>
                  {item.log && (
                    <>
                      {item.log.changeLog.map(
                        (e: any, j: number) =>
                          fictionProperties[
                            e.path as keyof typeof fictionProperties
                          ] && (
                            <span
                              key={j}
                              className={cn(
                                buttonVariants({
                                  variant: "default",
                                  size: "xxs",
                                  padding: "sm",
                                }),
                                "mr-1 bg-blue-600 hover:bg-blue-600"
                              )}
                            >
                              {
                                fictionProperties[
                                  e.path as keyof typeof fictionProperties
                                ]?.label
                              }
                            </span>
                          )
                      )}
                      {item.log.changeLog.some(
                        (e: any) =>
                          !fictionProperties[
                            e.path as keyof typeof fictionProperties
                          ]
                      ) && (
                        <span
                          key="etc"
                          className={cn(
                            buttonVariants({
                              variant: "default",
                              size: "xxs",
                              padding: "sm",
                            }),
                            "mr-1 bg-blue-600 hover:bg-blue-600"
                          )}
                        >
                          기타
                        </span>
                      )}
                    </>
                  )}
                </div>
                <div className="px-2 font-semibold">
                  {item.log &&
                    (item.log.charactersChanged >= 0
                      ? `+${item.log.charactersChanged}`
                      : `${item.log.charactersChanged}`)}
                </div>
              </div>
              <div className=" flex justify-end space-x-1">
                <Link
                  href={`/fictions/${fiction.id}/revision/${item.id}`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "xs" })
                  )}
                >
                  <span className=" whitespace-nowrap">기록 보기</span>
                </Link>
                <Button2
                  onClick={() => handleRevert(item.id)}
                  size="xs"
                  variant="outline"
                >
                  <Restore width={16} height={16} />
                  <span className=" whitespace-nowrap">되돌리기</span>
                </Button2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
