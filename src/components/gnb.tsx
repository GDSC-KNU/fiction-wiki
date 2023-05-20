import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import useUser from "@libs/client/useUser";
import Image from "next/image";
// import logo from "@public/fdb_logo.png";
import SearchModal from "@components/searchModal";

export default function Gnb() {
  const { data: nextSession } = useSession();
  const { user, isAdmin } = useUser();
  // console.log(user);

  return (
    <header className=" fixed top-0 z-20 h-12 w-full bg-white  py-2 shadow-md">
      <nav className="flex w-full items-center justify-between">
        <ul className=" ml-2 flex items-center space-x-2 whitespace-nowrap uppercase ">
          <li className=" cursor-pointer ">
            <Link
              className=" items-center font-mono text-2xl font-bold first-letter:flex"
              href="/"
              passHref
            >
              FDBS
            </Link>
          </li>
          <li className=" ">
            <ul className=" hidden md:flex">
              <li className="mr-3 ">
                <Link href="/fictions ">작품</Link>
              </li>
              <li className="mr-3">
                <Link href="/authors/1" passHref>
                  작가
                </Link>
              </li>
              <li className="mr-3">
                <Link href="/translation" passHref>
                  번역
                </Link>
              </li>
              {isAdmin ? (
                <li className="mr-3">
                  <Link href="/fictions/create">Create</Link>
                </li>
              ) : null}
            </ul>
          </li>
        </ul>

        <ul className=" flex items-center whitespace-nowrap">
          <li>
            <SearchModal />
          </li>
          {/* <SearchAutoComplete /> */}
          {isAdmin ? <li className="mr-3">Admin</li> : null}
          {nextSession ? (
            <li className=" mr-3 flex min-w-[26px] cursor-pointer items-center p-0">
              <Link
                className=" flex items-center rounded-full"
                href="/profile"
                passHref
              >
                <Image
                  className=" rounded-full"
                  src={nextSession?.user?.image ?? ""}
                  width={26}
                  height={26}
                  alt={nextSession?.user?.id ?? ""}
                ></Image>
              </Link>
            </li>
          ) : null}
          {nextSession ? (
            <li className=" mr-5 font-bold">
              <button onClick={() => signOut()}>로그아웃</button>
            </li>
          ) : (
            <li>
              <Link className=" mr-5 hover:cursor-pointer" href="/enter">
                Enter
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <ul className=" flex list-none space-x-6 whitespace-nowrap bg-white px-3 py-2 shadow-md md:hidden">
        <li>
          <Link href="/fictions ">작품</Link>
        </li>
        <li className="">
          <Link href="/authors/1" passHref>
            작가
          </Link>
        </li>
        <li className="">
          <Link href="/translation" passHref>
            번역
          </Link>
        </li>
        {isAdmin ? (
          <li className="">
            <Link href="/fictions/create">Create</Link>
          </li>
        ) : null}
      </ul>
    </header>
  );
}
