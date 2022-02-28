import Link from "next/link";

export default function FictionList() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div>
      <div className=" flex justify-center">
        <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 px-1 py-2">
          {arr.map((item) => (
            <Link href={`/fictions/${item}`}>
              <li
                key={item}
                className=" flex-col w-[144px] h-[190] my-3 mx-1 cursor-pointer"
              >
                <img
                  className=" w-full rounded-xl"
                  src={`https://picsum.photos/160/225?random=${item}`}
                ></img>
                <div className=" flex-col">
                  <div className=" font-bold">도쿄 리벤져스</div>
                  <div>number : {item}</div>
                  <div>Author : name</div>
                  {console.log(item)}
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
