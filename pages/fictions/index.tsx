import useUser from "@libs/client/useUser";
import { Fiction } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { title } from "process";
import useSWR from "swr";
import client from "@libs/server/client";
import Image from "next/image";

interface FictionsResponse {
  ok: boolean;
  fictions: Fiction[];
}

const Fictions: NextPage<FictionsResponse> = ({ fictions }) => {
  // const { user, isLoading } = useUser();
  // const { data } = useSWR<FictionsResponse>("/api/fictions");
  // console.log(data);
  console.log(fictions[2].image);
  return (
    <div className=" mt-10">
      <div className=" flex justify-center">
        <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 px-1 py-2 ">
          {fictions?.map((fiction, i) => (
            <Link key={fiction.id} href={`/fictions/${fiction.id}`}>
              <li className=" flex-col w-[144px] h-[190] my-3 mx-1 cursor-pointer bg-white border-[0.5px] border-[#BBBBBB] rounded-md overflow-hidden">
                <Image
                  className=" "
                  src={`https://imagedelivery.net/vZ0h3NOKMe-QsJIVyNemEg/${fiction.image}/fiction`}
                  width={142}
                  height={199.69}
                />
                <div className=" flex-col px-2 pb-2">
                  <div className=" text-xs text-gray-400">{fiction.genre}</div>
                  <div className=" font-bold">{fiction.title}</div>
                  <div className=" text-xs">
                    {fiction.currentState || "500화 완결"}
                  </div>
                  <div className=" overflow-hidden text-xs">
                    {fiction.author}
                  </div>
                  <div className=" text-xs">{fiction.nationality}</div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  console.log("BUILDING fictions index Statically");
  const fictions = await client.fiction.findMany();
  return {
    props: {
      fictions: JSON.parse(JSON.stringify(fictions)),
    },
  };
}

export default Fictions;
