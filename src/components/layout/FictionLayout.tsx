import { ReactNode } from "react";
import WikiNavBar from "@components/fiction/wikiNavBar";

const FictionLayout = (props: { children: ReactNode }) => {
  return (
    <div className=" block lg:flex">
      <div className="static left-0 lg:fixed lg:h-screen lg:w-24 lg:py-10 ">
        <WikiNavBar />
      </div>
      {props.children}
    </div>
  );
};

export default FictionLayout;
