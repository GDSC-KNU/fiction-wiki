import "../styles/globals.css";
import type { AppProps } from "next/app";
import Top from "../components/Top";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=" min-w-[300px] bg-gray-100 max-h-fit flex flex-col items-center min-h-[100vh] relative">
      <Top />
      <section className=" mt-10 mx-3 flex-column items-center pb-[60px]">
        <Component {...pageProps} />
      </section>
      <Footer />
    </div>
  );
}

export default MyApp;
