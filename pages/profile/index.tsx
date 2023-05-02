import React from "react";
import { Fiction, User, Comment, UserFictionStat } from "@prisma/client";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import Image from "next/image";

interface CommentWithUser extends Comment {
  createdBy: User;
  fiction: Fiction;
  userFictionStat: UserFictionStatWithFiction;
}

interface UserFictionStatWithFiction extends UserFictionStat {
  fiction: Fiction;
}

interface ProfileResponse {
  ok: boolean;
  profile: {
    comments: CommentWithUser[];
  };
}

const Profile: NextPage = () => {
  // const { user, isLoading } = useUser();
  // const { data: user, error } = useSWR("/api/users/me");
  const { data: session, status } = useSession();

  const { data } = useSWR<ProfileResponse>(
    typeof window === "undefined"
      ? null
      : !session
      ? null
      : `/api/users/me?userId=${session?.user?.id}`
  );

  //  mutate(`/api/fictions/${router.query.id}/comment?page=${1}`);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // console.log(data);
  return (
    <div className=" relative bottom-4 min-h-[213px] max-w-[1300px] ">
      <div className=" mb-7 bg-slate-400 py-4 pl-6">
        <h5 className=" font-bold">계정 정보</h5>
        <div className=" ">
          <Image
            src={session?.user?.image || "/"}
            width={64}
            height={64}
            alt={session?.user?.id || ""}
          />
          <div>{`사용자 - ` + session?.user?.name}</div>
        </div>
      </div>
      <div className=" grid grid-cols-12">
        <div className=" lg:col-span-1 "></div>
        <ul className=" col-span-12 lg:col-span-10">
          <h5 className=" mb-4 font-bold">내가 쓴 댓글</h5>
          {data?.profile?.comments?.map(({ comment, fiction, id }, i) => (
            <li key={id} className=" mb-2 flex items-center justify-between">
              <div className=" rounded bg-black p-1 text-xs text-white ring-black">
                {fiction?.title}
              </div>
              <div>{comment}</div>
            </li>
          ))}
        </ul>
        <div className=" lg:col-span-1 "></div>
      </div>
    </div>
  );
};

export default Profile;
