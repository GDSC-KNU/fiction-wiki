import Link from "next/link";

export default function Gnb() {
  return (
    <header className="flex bg-blue-200 fixed top-0 w-full py-2 z-10">
      <nav className="flex w-full justify-between items-center">
        <ul className="flex uppercase font-bold">
          <Link href="/">
            <li className=" ml-3 mr-3">Logo</li>
          </Link>
          <Link href="/fiction">
            <li className="mr-3">Fiction</li>
          </Link>
          <Link href="/author">
            <li className="mr-3">Author</li>
          </Link>
          <Link href="/ranking">
            <li className="mr-3">Ranking</li>
          </Link>
        </ul>
        <ul>
          <li className="mr-3">Login</li>
        </ul>
      </nav>
    </header>
  );
}
