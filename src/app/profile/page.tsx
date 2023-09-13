"use client";

import React from "react";
import { Fiction, Comment, UserFictionStat } from "@prisma/client";

import Image from "next/image";
import EditSVG from "@public/svg/edit_pen-to-square.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useUser from "@libs/client/useUser";

interface CommentWithFiction extends Comment {
  fiction: Fiction;
}

interface UserFictionStatWithFiction extends UserFictionStat {
  fiction: Fiction;
}

interface ProfileResponse {
  ok: boolean;
  profile: {
    comments: CommentWithFiction[];
  };
}

export default function Profile() {
  const router = useRouter();
  // const { user, isLoading } = useUser();
  // const { data: user, error } = useSWR("/api/users/me");
  // const { data: session, status } = useSession();
  const { user } = useUser();

  // const { data: userDetailedInfo } = useSWR<ProfileResponse>(
  //   !user ? null : `/api/users/me?userId=${user?.id}`
  // );
  // console.log(userDetailedInfo);
  //  mutate(`/api/fictions/${router.query.id}/comment?page=${1}`);

  return (
    <div className="mx-auto min-h-[213px] max-w-[1300px]">
      <div className=" mb-7 flex justify-between bg-slate-400 py-4 pl-6">
        <div>
          <h5 className=" font-bold">계정 정보</h5>
          <div className="  ">
            <Image
              src={user?.image || "/"}
              width={64}
              height={64}
              alt={user?.id || ""}
            />
            <div>{`사용자 - ` + (user?.nickname || "")}</div>
          </div>
        </div>
        <Link
          href="/profile/edit"
          className=" relative mr-3 flex h-fit cursor-pointer"
        >
          <span>
            <EditSVG width={24} height={24} />
          </span>
          <span className=" my-auto ml-1 whitespace-nowrap">편집하기 </span>
        </Link>
      </div>
      <div className=" grid grid-cols-12 px-1">
        <div className=" lg:col-span-1 "></div>
        <ul className=" col-span-12 lg:col-span-10">
          <h5 className=" mb-4 font-bold">내가 쓴 댓글</h5>
          {user &&
            user.comments?.map(
              (
                {
                  comment,
                  fiction,
                  id,
                }: { comment: string; fiction: Fiction; id: number },
                i: number
              ) => (
                <li
                  key={id}
                  className=" mb-2 flex items-center justify-between"
                >
                  <div className=" rounded bg-black p-1 text-xs text-white ring-black">
                    {fiction?.title}
                  </div>
                  <div>{comment}</div>
                </li>
              )
            )}
        </ul>
        <div className=" lg:col-span-1 "></div>
      </div>
    </div>
  );
}
