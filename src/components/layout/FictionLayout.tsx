import { ReactNode } from "react";

const FictionLayout = (props: { children: ReactNode }) => {
  return (
    <div className=" relative  flex max-h-fit min-h-[100vh] flex-col items-center bg-white">
      <section className="  mt-[80px] w-full max-w-[1300px] items-center pb-[60px]  md:mt-[48px]">
        {props.children}
      </section>
    </div>
  );
};

export default FictionLayout;
