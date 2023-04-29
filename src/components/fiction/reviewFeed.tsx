import Link from "next/link";

export default function ReviewFeed({ data: reviews }: any) {
  // console.log(reviews);
  return (
    <div className=" sm:pt-3">
      <h2 className=" mb-2 w-full border-b-[1px] py-2 text-xl font-bold">
        리뷰
      </h2>
      {/* <button onClick={() => console.log("clicked")}>button</button> */}
      <div>
        <ul>
          {reviews.map((item: any, i: number) => (
            <li className=" mb-3 flex" key={i}>
              <div className="">
                <div className=" mb-4 h-20 w-16 bg-slate-300"></div>
              </div>
              <div className=" ml-2 flex-col">
                <a href={item?.link}>
                  <span className=" text-sm font-bold">{item?.title}</span>
                </a>
                <div className=" text-xs">{item?.snippet}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
