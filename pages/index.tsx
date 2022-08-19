import type { NextPage } from "next";
import Carousel from "@components/Carousel";
import useUser from "@libs/client/useUser";
import { Fiction, UserFictionStat } from "@prisma/client";
import useSWR from "swr";
import Link from "next/link";
import client from "@libs/server/client";
import Image from "next/image";

export interface UserFictionStatWithMore extends UserFictionStat {
  total: number;
  _count: {
    users: number;
  };
}

export interface FictionWithMore extends Fiction {
  _count: {
    favs: number;
  };
  userFictionStat: UserFictionStatWithMore;
}

interface FictionsResponse {
  ok: boolean;
  fictions: FictionWithMore[];
}

const Home: NextPage<{ fictions: FictionWithMore[] }> = ({ fictions }) => {
  // const { data } = useSWR<FictionsResponse>("/api/fictions");

  // const { data: UserStatData, mutate: boundMutate } = useSWR<any>(
  //   router.query.id ? `/api/fictions/${router.query.id}` : null
  // );

  // const { user, isLoading } = useUser();
  // console.log(fictions[0].userFictionStat);

  let top_total = fictions.sort(
    (a, b) => (b.userFictionStat?.total || 0) - (a.userFictionStat?.total || 0)
  );

  return (
    <div>
      <Carousel />
      {/* 화면크기 sm 이상 */}
      <div className=" hidden sm:block">
        <section className="">
          <div className="mt-5 font-bold text-xl">평점 TOP 5</div>
          <ul className=" flex">
            {top_total?.slice(0, 5).map((fiction, i) => (
              <Link key={fiction.id} href={`/fictions/${fiction.id}`}>
                <li className=" flex-col w-[144px] h-[190] my-3 mx-1 cursor-pointer bg-white border-[0.5px] border-[#BBBBBB] rounded-md overflow-hidden">
                  <Image
                    className=""
                    src={`https://imagedelivery.net/vZ0h3NOKMe-QsJIVyNemEg/${fiction.image}/fiction`}
                    width={142}
                    height={199.69}
                  />
                  <div className=" flex-col px-2 pb-2">
                    <div className=" flex justify-between">
                      <div className=" text-xs text-gray-400">
                        {fiction.genre}
                      </div>
                      <div className="  text-xs font-bold">
                        {fiction.userFictionStat?.total || 0}(
                        {fiction.userFictionStat?._count?.users || 0})
                      </div>
                    </div>
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
        </section>
        <section>
          <div className="mt-5 font-bold text-xl">Editors Pick</div>
          <ul className=" flex">
            {top_total?.slice(0, 5).map((fiction, i) => (
              <Link key={fiction.id} href={`/fictions/${fiction.id}`}>
                <li className=" flex-col w-[144px] h-[190] my-3 mx-1 cursor-pointer bg-white border-[0.5px] border-[#BBBBBB] rounded-md overflow-hidden">
                  <Image
                    className=""
                    src={`https://imagedelivery.net/vZ0h3NOKMe-QsJIVyNemEg/${fiction.image}/fiction`}
                    width={142}
                    height={199.69}
                  />
                  <div className=" flex-col px-2 pb-2">
                    <div className=" flex justify-between">
                      <div className=" text-xs text-gray-400">
                        {fiction.genre}
                      </div>
                      <div className="  text-xs font-bold">
                        {fiction.userFictionStat?.total || 0}(
                        {fiction.userFictionStat?._count?.users || 0})
                      </div>
                    </div>
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
        </section>
      </div>
      <div className=" md:hidden">
        <section className="">
          <div className="mt-5 font-bold text-xl">평점 TOP 5</div>
          <ul className=" flex-col w-96">
            {top_total?.map((fiction, i) => (
              <Link key={fiction.id} href={`/fictions/${fiction.id}`}>
                <li className=" flex h-[190] my-3 mx-1 cursor-pointer bg-white border-[0.5px] border-[#BBBBBB] rounded-md overflow-hidden">
                  <img
                    className=" w-[110.19px] h-[165.28px]"
                    src={`https://picsum.photos/160/225?random=${fiction.id}`}
                  ></img>
                  <div className=" flex-col px-2 py-2">
                    <div className=" text-xs text-gray-400">
                      {fiction.genre}
                    </div>
                    <div className=" font-bold">{fiction.title}</div>
                    <div className=" text-xs">
                      {fiction.currentState || "500화 완결"}
                    </div>
                    <div className=" overflow-hidden text-xs">
                      {fiction.author}, {fiction.nationality}
                    </div>
                    <div className=" text-xs mt-2">
                      {fiction.synopsis.slice(1, 100) + "..."}{" "}
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const fictions = await client.fiction.findMany({
    include: {
      userFictionStat: {
        select: {
          originality: true,
          writing: true,
          character: true,
          verisimilitude: true,
          synopsisComposition: true,
          value: true,
          total: true,
          _count: true,
        },
      },
    },
  });
  // console.log(fictions);
  return {
    props: {
      fictions: JSON.parse(JSON.stringify(fictions)),
    },
  };
}

export default Home;
