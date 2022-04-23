import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Gnb() {
  const { data: session } = useSession();
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
          <Link href="/fictions/create">
            <li className="mr-3">Create</li>
          </Link>
        </ul>
        <ul className=" flex cursor-pointer">
          <Link href="/me">
            <li className=" mr-5 font-bold">Profile</li>
          </Link>
          <Link href="/enter">
            <li className=" mr-5 font-bold">Enter</li>
          </Link>
          {session ? (
            <li className=" flex mr-5">
              <div className=" mr-5 font-bold">{session.user?.email}</div>
              <button className=" font-bold" onClick={() => signOut()}>
                Sign out
              </button>
            </li>
          ) : (
            <li className=" flex mr-5">
              <button className=" font-bold" onClick={() => signIn()}>
                Sign in
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
