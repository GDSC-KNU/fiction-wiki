import useUser from "@libs/client/useUser";
import { Fiction } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";

const Me: NextPage = () => {
  const { user, isLoading } = useUser();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <div className=" flex justify-center">Profile 입니다.</div>
    </div>
  );
};

export default Me;
