import { FictionContext } from "@src/context/fictionContext";

import Link from "next/link";
import { useRouter } from "next/router";

const WikiNavBar = () => {
  const router = useRouter();
  const { id: fictionId } = router.query;

  const routes = [
    { id: "read", name: "읽기", path: `/fictions/${fictionId}` },
    { id: "edit", name: "편집", path: `/fictions/${fictionId}/edit` },
    { id: "history", name: "히스토리", path: `/fictions/${fictionId}/history` },
    { id: "share", name: "공유", path: `/fictions/${fictionId}/share` },
  ];

  const activeClass = (route: any) => {
    if (router.pathname === "/fictions/[id]" && route === "read")
      return " font-mono text-2xl font-bold text-blue-600";

    const isActive = router.pathname.includes(route);
    return isActive ? " font-mono text-2xl font-bold text-blue-600" : "";
  };

  return (
    <ul className=" flex items-center justify-center space-x-2 whitespace-nowrap border-b-[1px] border-r-[1px] py-2 uppercase lg:ml-2 lg:block lg:flex-col lg:space-x-0 lg:space-y-4 lg:border-b-0 lg:border-r-0 ">
      {routes.map(({ id, name, path }) => (
        <li
          key={id}
          className={`cursor-pointer font-bold text-gray-800 ${activeClass(
            id
          )}`}
        >
          <Link href={path} passHref>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default WikiNavBar;
