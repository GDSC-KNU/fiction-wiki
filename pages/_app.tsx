import "../styles/globals.css";
import type { AppProps } from "next/app";
import Top from "../components/Top";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=" min-w-[350px] bg-gray-200 max-h-fit">
      <Top />
      <div className=" mt-10 mx-3 ">
        <Component {...pageProps} />

        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
