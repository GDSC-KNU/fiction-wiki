import useUser from "@libs/client/useUser";
import { Fiction } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";

interface FictionsResponse {
  ok: boolean;
  fictions: Fiction[];
}

const Fictions: NextPage = () => {
  const { user, isLoading } = useUser();
  const { data } = useSWR<FictionsResponse>("/api/fictions");
  console.log(data);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    // <div className=" ">
    //   <ul className=" ">
    //     {data?.fictions?.map((fiction, i) => {
    //       <Link key={fiction.id} href={`/fictions/${fiction.id}`}>
    //         <li className=" flex-col w-[144px] h-[190] my-3 mx-1 cursor-pointer">
    //           <img
    //             className=" w-full rounded-xl"
    //             src={`https://picsum.photos/160/225?random=${fiction.id}`}
    //           ></img>
    //           <div className=" flex-col">
    //             <div className=" font-bold">아이언맨 2</div>
    //             <div>제목 : {fiction.title}</div>
    //             <div>작가 : {fiction.author}</div>
    //           </div>
    //         </li>
    //         <li>asd</li>
    //       </Link>;
    //     })}
    //   </ul>
    // </div>

    <div>
      <div className=" flex justify-center">
        <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 px-1 py-2 ">
          {data?.fictions.map((fiction, i) => (
            <Link key={fiction.id} href={`/fictions/${fiction.id}`}>
              <li className=" flex-col w-[144px] h-[190] my-3 mx-1 cursor-pointer bg-white border-[0.5px] border-[#BBBBBB] rounded-md">
                <img
                  className=" overflow-hidden"
                  src={`https://picsum.photos/160/225?random=${fiction.id}`}
                ></img>
                <div className=" flex-col px-2 py-2">
                  <div className=" font-bold">{fiction.title}</div>
                  <div className=" overflow-hidden">{fiction.author}</div>
                  <div>{fiction.nationality}</div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Fictions;
