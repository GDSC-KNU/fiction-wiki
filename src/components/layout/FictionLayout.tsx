import { ReactNode } from "react";

const FictionLayout = (props: { children: ReactNode }) => {
  return (
    <div className=" relative  flex max-h-fit min-h-[100vh] flex-col items-center bg-white">
      {props.children}
    </div>
  );
};

export default FictionLayout;
