import { FictionContext } from "@src/context/fictionContext";
import Link from "next/link";
import { useContext } from "react";

const WikiNavBar = () => {
  let fictionContext = useContext(FictionContext);

  return (
    <ul className=" flex items-center justify-center space-x-2 whitespace-nowrap border-b-[1px] border-r-[1px] py-2 uppercase lg:ml-2 lg:block lg:flex-col lg:space-x-0 lg:space-y-4 lg:border-b-0 lg:border-r-0 ">
      <li className=" cursor-pointer ">
        <Link className=" font-mono text-2xl font-bold " href="/" passHref>
          READ
        </Link>
      </li>
      <li className=" ">
        <Link href={`/fictions/${fictionContext.fiction?.id}/edit`}>Edit</Link>
      </li>
      <li className="">
        <Link href={`/fictions/${fictionContext.fiction?.id}/history`} passHref>
          History
        </Link>
      </li>
      <li className="">
        <Link href={`/fictions/${fictionContext.fiction?.id}/share`} passHref>
          Share
        </Link>
      </li>
    </ul>
  );
};
export default WikiNavBar;
