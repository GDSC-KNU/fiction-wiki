import "../styles/globals.css";
import type { AppProps } from "next/app";
import Top from "../components/Top";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Top />
      <div className=" bg-yellow-200 mt-10 mx-3 max-w-md">
        <Component {...pageProps} />

        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
