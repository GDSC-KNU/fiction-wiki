import { ReactNode } from "react";
import Top from "src/components/top";
import Footer from "src/components/footer";

const Layout = (props: { children: ReactNode }) => {
  return (
    <div className=" relative  flex max-h-fit min-h-[100vh] flex-col items-center bg-white">
      <Top />
      <section className="  mt-[80px] w-full items-center pb-[60px]  md:mt-[48px]">
        {props.children}
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
