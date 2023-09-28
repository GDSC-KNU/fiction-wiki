import { useEffect, useState } from "react";
import { useQueryObject } from "@/hooks/useQueryObject";

export const useHrefChangeNotifier = () => {
  const { queryString, updateQueryObject } = useQueryObject();
  const [changed, setChanged] = useState({});

  useEffect(() => {
    const handlePopState = () => {
      const { pathname, search } = window.location;
      const newUrl = `${pathname}?${queryString}`;
      //   console.log(pathname, newUrl);

      //   updateQueryObject()
      //   history.pushState(null, "", newUrl);
    };

    window.addEventListener("popstate", handlePopState);

    // return () => {
    //   window.removeEventListener("popstate", handlePopState); // Cleanup event listener on component unmount
    // };
  }, []);

  return [changed];
};
