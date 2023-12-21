"use client";

import { ReactNode } from "react";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

import useUser from "@libs/client/useUser";
import Image from "next/image";
import SearchModal from "@components/SearchModal";
import useScrollDirection from "@/hooks/useScrollDirection";
import { motion } from "framer-motion";
import { User } from "@prisma/client";

function NavbarLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li
      className={`${
        isActive ? "border-b-[1px] border-blue-600 text-blue-600" : ""
      } cursor-pointer hover:border-b-[1px] hover:border-blue-600 hover:text-blue-600`}
    >
      <Link className=" flex h-full items-center" href={href} passHref>
        {children}
      </Link>
    </li>
  );
}

function UserAvatar({ user }: { user: User }) {
  return (
    <li className="mr-3 flex min-w-[26px] cursor-pointer items-center p-0">
      <Link className="flex items-center rounded-full" href="/profile" passHref>
        <Image
          className="rounded-full hover:brightness-[0.8]"
          src={user?.image ?? ""}
          width={26}
          height={26}
          alt={user?.id ?? ""}
        />
      </Link>
    </li>
  );
}

export default function Gnb() {
  const { user, isAdmin } = useUser();
  const isScrollingDown = useScrollDirection(48);

  const animateProps = {
    y: isScrollingDown ? -100 : 0,
  };

  const navLinks = [
    { href: "/fictions", label: "작품" },
    { href: "/authors/1", label: "작가" },
    { href: "/translation", label: "번역" },
    { href: "/glossaries", label: "용어집" },
    { href: "/fictions/create", label: "새 문서" },
  ];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={animateProps}
      transition={{ duration: 0.3, type: "tween" }}
      className=" fixed top-0 z-50 h-12 w-screen bg-white shadow-md"
    >
      <nav className="relative z-50 flex h-full w-full items-center justify-between pl-4">
        <ul className="flex h-full items-center space-x-2 whitespace-nowrap uppercase">
          <li className="cursor-pointer">
            <Link
              className="items-center font-mono text-2xl font-bold"
              href="/"
              passHref
            >
              FDBS
            </Link>
          </li>
          <li className=" h-full">
            <ul className="hidden h-full space-x-3 md:flex">
              {navLinks.map((link) => (
                <NavbarLink key={link.href} href={link.href}>
                  {link.label}
                </NavbarLink>
              ))}
            </ul>
          </li>
        </ul>
        <ul className="flex h-full items-stretch whitespace-nowrap text-center">
          <li className=" mr-2 flex items-center justify-center">
            <SearchModal />
          </li>
          {isAdmin && (
            <li className="mr-3 flex items-center justify-center">Admin</li>
          )}
          {user ? <UserAvatar user={user} /> : null}
          {user ? (
            <li className="mr-5 flex items-center justify-center font-bold">
              <button onClick={() => signOut()}>로그아웃</button>
            </li>
          ) : (
            <li className=" flex items-center justify-center">
              <Link className="mr-5 hover:cursor-pointer" href="/enter">
                Enter
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <ul className="z-40 flex h-12 list-none space-x-6 whitespace-nowrap bg-white px-4 shadow-md md:hidden">
        {navLinks.map((link) => (
          <NavbarLink key={link.href} href={link.href}>
            {link.label}
          </NavbarLink>
        ))}
      </ul>
    </motion.header>
  );
}
