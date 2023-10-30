"use client";

import Link from "next/link";
import { usePathname, useRouter, useParams } from "next/navigation";

const WikiNavBar = () => {
  const router = useRouter();
  // const [fictionId, setFictionId] = useState("");

  const { id: fictionId } = useParams();
  const pathname = usePathname();

  // const fictionId = searchParams.get("id");

  const routes = [
    { id: "read", name: "읽기", path: `/fictions/${fictionId}` },
    { id: "edit", name: "편집", path: `/fictions/${fictionId}/edit` },
    { id: "history", name: "히스토리", path: `/fictions/${fictionId}/history` },
    // { id: "share", name: "공유", path: `/fictions/${fictionId}/share` },
  ];

  const activeClass = (route: any) => {
    if (pathname === `/fictions/${fictionId}` && route === "read")
      return " font-mono text-2xl font-bold text-blue-600";

    const isActive = pathname.includes(route);
    return isActive ? " font-mono text-2xl font-bold text-blue-600" : "";
  };

  // useEffect(() => {
  //   const id = params.get("id");
  //   console.log(id);
  //   if (id) setFictionId(id);
  // }, []); // Updating whenever query changes

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
