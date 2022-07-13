import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import useUser from "@libs/client/useUser";
import useSWR from "swr";
import { useEffect } from "react";
import router from "next/router";

export default function Gnb() {
  const { data: session } = useSession();
  // const { data } = useSWR("/api/users/me");
  // useEffect(() => {
  //   if (data && !data.ok) {
  //     router.replace("/enter");
  //   }
  // }, [data, router]);
  // console.log(data);
  return (
    <header className="flex bg-blue-200 fixed top-0 w-full py-2 z-10">
      <nav className="flex w-full justify-between items-center">
        <ul className="flex uppercase font-bold cursor-pointer">
          <Link href="/">
            <li className=" ml-3 mr-3">Logo</li>
          </Link>
          <Link href="/fictions">
            <li className="mr-3">Fiction</li>
          </Link>
          <Link href="/authors">
            <li className="mr-3">Author</li>
          </Link>
          <Link href="/ranking">
            <li className="mr-3">Ranking</li>
          </Link>
          {/* <Link href="/fictions/create">
            <li className="mr-3">Create</li>
          </Link> */}
        </ul>
        <ul className=" flex cursor-pointer font-bold">
          {session ? (
            <Link href="/profile">
              <li className="mr-3">{session.user!.name}</li>
            </Link>
          ) : null}
          {session ? (
            <button className=" mr-5" onClick={() => signOut()}>
              Sign out
            </button>
          ) : (
            <Link href="/enter">
              <li className=" mr-5">Enter</li>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
}
