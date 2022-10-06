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

interface CommentsResponse {
  ok: boolean;
  comments: CommentWithUser[];
}

const Profile: NextPage = () => {
  // const { user, isLoading } = useUser();
  // const { data: user, error } = useSWR("/api/users/me");
  const { data } = useSWR<CommentsResponse>(
    typeof window === "undefined" ? null : "/api/comments"
  );
  const { data: session, status } = useSession();

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // console.log(session);
  return (
    <div className="   w-[100vw] max-w-[1300px] min-h-[213px] ">
      <div className=" bg-slate-400 mb-7 pl-6 py-4">
        <h5 className=" font-bold">계정 정보</h5>
        <div className=" ">
          {/* <img src={session?.user?.image}></img> */}
          <Image
            src={session?.user?.image || "/"}
            width={64}
            height={64}
            alt={session?.user?.id}
          />
          <div>{`사용자 - ` + session?.user?.name}</div>
        </div>
      </div>
      <div className=" grid grid-cols-12">
        <div className=" col-span-0 lg:col-span-1 "></div>
        <ul className=" col-span-12 lg:col-span-10">
          <h5 className=" font-bold ">내가 쓴 댓글</h5>
          {data?.comments?.map((comment, i) => (
            <li
              key={i}
              className=" flex place-content-between items-center mb-2"
            >
              <div className=" text-xs ring-black bg-black text-white p-1 rounded">
                {comment?.userFictionStat?.fiction.title}
              </div>
              <div>{comment.comment}</div>
              <div className=" relative right-0">{}</div>

              {/* <li
                  key={index}
                  className=" flex place-content-between mx-2 border-b-2 pb-1 last:border-b-0 relative"
                >
                  <div className=" mt-2 text-sm overflow-hidden mr-16">
                    {dummyComment[item]}
                  </div>
                  <div className=" mt-2 text-sm absolute right-24">{item}</div>
                  <div className=" mt-2 ml-5 text-sm min-w-[78px]">
                    👍 👎 (+3)
                  </div>
                </> */}
            </li>
          ))}
        </ul>
        <div className=" col-span-0 lg:col-span-1 "></div>
      </div>
    </div>
  );
};

export default Profile;
