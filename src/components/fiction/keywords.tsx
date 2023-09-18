import Link from "next/link";

export default function Keywords({ fiction }: any) {
  return (
    <>
      <div className=" col-span-5 mb-3 mr-0 sm:col-span-3 sm:mb-0 sm:mr-3">
        <div className=" mb-3 h-full w-full rounded-md sm:mb-0">
          <h2 className=" border-b-[1px] pt-1 font-bold">메인 태그</h2>
          <ul className=" inline-flex flex-wrap pt-2">
            {fiction?.keywords
              ?.filter(
                (item: any) =>
                  item?.keyword?.isOfHeroine === false &&
                  item?.keyword?.isOfMC === false &&
                  item?.keyword?.isOfCons === false
              )
              .map((item: any, index: any) => (
                <li
                  key={index}
                  className={
                    item?.keyword?.isOfMC
                      ? " m-1 h-fit rounded-md border-[#BBBBBB] text-center text-sm ring-2 ring-red-500"
                      : item?.keyword?.isOfHeroine
                      ? " m-1 h-fit rounded-md border-[#BBBBBB] text-center text-sm ring-2 ring-blue-500"
                      : " m-1 h-fit cursor-pointer whitespace-nowrap rounded-3xl bg-gray-200 p-1 text-center text-sm text-[#666676]"
                  }
                >
                  <Link
                    href={`/search/keyword/${item?.keyword?.name}/1`}
                    passHref
                  >
                    #{item?.keyword?.name}
                  </Link>
                </li>
              ))}
          </ul>
          <div className=" border-b-[1px] pt-1 font-bold">주인공 태그</div>
          <ul className=" inline-flex flex-wrap pt-2">
            {fiction?.keywords
              .filter((item: any) => item?.keyword?.isOfMC === true)
              .map((item: any, index: any) => (
                <li
                  key={index}
                  className=" m-1 h-fit whitespace-nowrap rounded-3xl bg-gray-200 p-1 text-center text-sm text-[#666676]"
                >
                  <Link
                    href={`/search/keyword/${item?.keyword?.name}/1`}
                    passHref
                  >
                    #{item?.keyword?.name}
                  </Link>
                </li>
              ))}
          </ul>
          <div className=" border-b-[1px] pt-1 font-bold">히로인 태그</div>
          <ul className=" inline-flex flex-wrap pt-2">
            {fiction?.keywords
              .filter((item: any) => item?.keyword?.isOfHeroine === true)
              .map((item: any, index: any) => (
                <li
                  key={index}
                  className=" m-1 h-fit whitespace-nowrap rounded-3xl bg-gray-200 p-1 text-center text-sm text-[#666676]"
                >
                  <Link
                    href={`/search/keyword/${item?.keyword?.name}/1`}
                    passHref
                  >
                    #{item?.keyword?.name}
                  </Link>
                </li>
              ))}
          </ul>
          <div className=" border-b-[1px] pt-1 font-bold">호불호 태그</div>
          <ul className=" inline-flex flex-wrap pt-2">
            {fiction?.keywords
              .filter((item: any) => item?.keyword?.isOfCons === true)
              .map((item: any, index: any) => (
                <li
                  key={index}
                  className=" m-1 h-fit whitespace-nowrap rounded-3xl bg-red-200 p-1 text-center text-sm text-[#666676]"
                >
                  <Link
                    href={`/search/keyword/${item?.keyword?.name}/1`}
                    passHref
                  >
                    #{item?.keyword?.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
