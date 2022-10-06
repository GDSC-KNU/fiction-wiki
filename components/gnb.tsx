import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import useUser from "@libs/client/useUser";
import Image from "next/image";
import logo from "../public/fdb_logo.png";

export default function Gnb() {
  const { data: nextSession } = useSession();
  const { user, isLoading } = useUser();
  // const { data: CredentailSession } = useSWR("/api/users/me");
  // console.log(user);
  // console.log(nextSession);
  // useEffect(() => {
  //   if (data && !data.ok) {
  //     router.replace("/enter");
  //   }
  // }, [data, router]);
  // console.log(data);
  return (
    <header className="flex bg-blue-200 fixed top-0 w-full py-2 z-20">
      <nav className="flex w-full justify-between items-center">
        <ul className="flex uppercase font-bold ">
          <li className=" ml-3 mr-3 cursor-pointer">
            <Link className=" " href="/" passHref>
              <a className=" flex items-center ">
                <Image
                  className=" rounded-xl border-blue-800 border-4 border-solid"
                  src={logo}
                  width={26}
                  height={26}
                  alt="FictionDbs"
                ></Image>
              </a>
            </Link>
          </li>
          <li className="mr-3">
            <Link href="/fictions/all/all/all/1/all">
              <a>작품</a>
            </Link>
          </li>
          <li className="mr-3">
            <Link href="/authors/1" passHref>
              <a>작가</a>
            </Link>
          </li>
          <Link href="/ranking">
            <li className="mr-3">Ranking</li>
          </Link>
          {user ? (
            <li className="mr-3">
              <Link href="/fictions/create">
                <a>Create</a>
              </Link>
            </li>
          ) : null}
        </ul>
        <ul className=" flex font-bold items-center">
          {user ? <li className="mr-3">Admin</li> : null}
          {nextSession ? (
            <li className=" mr-3 p-0 flex items-center cursor-pointer min-w-[26px]">
              <Link className=" rounded-full" href="/profile" passHref>
                <a className=" flex items-center">
                  <Image
                    className=" rounded-full"
                    src={nextSession?.user?.image ?? ""}
                    width={26}
                    height={26}
                    alt={nextSession?.user?.id ?? ""}
                  ></Image>
                </a>
              </Link>
            </li>
          ) : null}
          {nextSession ? (
            <button className=" mr-5 font-bold" onClick={() => signOut()}>
              Sign out
            </button>
          ) : (
            <li>
              <Link href="/enter">
                <a className=" mr-5 hover:cursor-pointer">Enter</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
