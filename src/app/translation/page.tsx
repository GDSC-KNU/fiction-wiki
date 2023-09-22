"use client";

import useState from "react-usestateref";
import ClipLoader from "react-spinners/ClipLoader";
import useSWR from "swr";
import Link from "next/link";
import useUser from "@libs/client/useUser";
import GlossaryInputModal from "@components/translation/glossaryInputModal";
import { useEffect } from "react";
import useScrollDirection from "@/hooks/useScrollDirection";
import { motion } from "framer-motion";
import useMutation from "@libs/client/useMutation";

interface InputProps {
  onSend: (input: string) => void;
  disabled: boolean;
}

const ChatInput = ({ onSend }: InputProps) => {
  const [input, setInput] = useState("");

  const sendInput = () => {
    onSend(input);
    setInput("");
  };

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      sendInput();
    }
  };

  return (
    <div className=" flex ">
      {/* <NextSeo
        title={`번역`}
        description={"국외 웹소설들을 직접 번역해서 보세요."}
        canonical={`https://fictiondbs.com/translation`}
        openGraph={{
          url: `https://fictiondbs.com/translation`,
        }}
      /> */}
      <input
        className="w-full appearance-none rounded-md border border-gray-300 py-2 pl-3 pr-9 shadow-sm placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-blue-400"
        value={input}
        onChange={(ev: any) => setInput(ev.target.value)}
        type="text"
        placeholder="URL을 입력하세요(데스크탑 URL)"
        disabled={false}
        onKeyDown={(ev) => handleKeyDown(ev)}
      ></input>
      <div className=" relative right-8 top-[14px] z-30 mb-6 bg-white hover:cursor-pointer">
        <svg
          onClick={() => {
            onSend(input);
            setInput("");
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className=" "
          viewBox="0 0 16 16"
        >
          <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />{" "}
          <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />{" "}
        </svg>
      </div>
    </div>
  );
};

const Translation = () => {
  // const [messages, setMessages, messagesRef] = useState<MessageProps>();
  const { user } = useUser();
  let [queryString, setQueryString] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);

  const customFetcher = async (url: any, queryString: string) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: queryString,
      }),
    });
    return response.json();
  };
  let {
    data: response,
    isValidating,
    error,
  } = useSWR<any>(["/api/translation", queryString], customFetcher, {
    revalidateOnMount: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
  });
  const onSubmitHandler = async (input: string) => {
    if (!user) {
      alert("번역기능을 사용하려면 로그인 해주세요.");
      return;
    }
    if (
      !input.startsWith("https://read.qidian.com/chapter") &&
      !input.startsWith("https://www.uukanshu.com") &&
      !input.startsWith("https://www.aixdzs.com")
    ) {
      alert("잘못된 입력입니다.");
      return;
    }

    const check = async () => {
      if (!input.startsWith("https://")) {
        input = "https://" + input;
      }
      setQueryString(input);
    };

    await check();
  };

  const [selectedText, setSelectedText] = useState("");

  useEffect(() => {
    const handleMouseUp = () => {
      const text = window.getSelection()?.toString();
      if (text && text.trim().length > 0) {
        setSelectedText(text);
        setModalOpen(true);
      }
    };

    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // const handleToggleNavbar = () => {
  //   setNavbarVisible(!isNavbarVisible);
  // };

  const isScrollingDown = useScrollDirection();

  const animateProps = {
    x: isScrollingDown ? 100 : 0,
  };

  const [updateFav, { loading, data }] = useMutation(
    `${process.env.NEXT_PUBLIC_HOST}/api/fav`
  );

  const handleGlossaryKeyUpdate = async () => {
    const originalTitle = response.originalTitle;
    await updateFav({ originalTitle }, "PUT");

    alert("갱신 완료");
  };

  return (
    <main className=" relative mx-auto mt-6 max-w-[1000px]">
      {user && response && (
        <motion.header
          initial={{ y: 0 }}
          animate={animateProps}
          transition={{ duration: 0.3, type: "tween" }}
          className=" fixed bottom-10 right-4 flex items-center justify-center"
        >
          <div className=" flex flex-col">
            <button
              className=" rounded border border-gray-300 bg-blue-500 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
              onClick={() => setModalOpen(true)}
            >
              용어집 등록
            </button>
            <button
              className=" rounded border border-gray-300 bg-blue-500 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700"
              onClick={handleGlossaryKeyUpdate}
            >
              용어집 갱신
            </button>
          </div>
        </motion.header>
      )}
      <GlossaryInputModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        text={selectedText}
        data={response}
      />
      <div className=" mb-2 ml-5 text-gray-500">
        1. 지원사이트 목록:{" "}
        {/* <a
          className=" text-blue-500 underline"
          title="https://www.qidian.com/"
          href="https://www.qidian.com/"
        >
          qidian
        </a>
        ,{`${" "}`} */}
        <a
          className=" text-blue-500 underline"
          title="https://www.aixdzs.com/"
          href="https://www.aixdzs.com/"
        >
          aixdzs
          <p className=" text-xs text-gray-600 no-underline">
            (ex: https://www.aixdzs.com/read/167/167176/p1.html (모바일 URL
            미지원))
          </p>
        </a>
      </div>
      <div className=" mb-2 ml-5 text-gray-500">
        2.{" "}
        <Link className=" font-bold text-blue-600" href={"/profile/edit"}>
          이곳
        </Link>{" "}
        에서 papago clientId, clientKey를 입력하세요.(필수)
      </div>
      {/* <div className=" invisible">新章</div> */}
      <div className=" w-full px-4">
        <ChatInput
          onSend={(input) => {
            onSubmitHandler(input);
          }}
          disabled={false}
        />
      </div>
      <div id="content" className=" mt-6 px-4">
        <h2 translate="no" className=" w-fit text-xl font-semibold">
          {response?.originalTextArray?.at(-1)}
        </h2>
        <div className=" w-fit text-xl font-semibold">
          {response?.translatedTextArray?.at(-1)}
        </div>
        {response &&
          (response?.originalTextArray || [""]).map((item: any, i: any) => {
            if (i === response?.originalTextArray?.length - 1) return;

            return (
              <div className=" pt-5" key={i}>
                <div className=" text-sm">{item}</div>
                <div className=" text-xs">{response?.pinyinTextArray?.[i]}</div>
                <div className=" ">{response?.translatedTextArray?.[i]}</div>
              </div>
            );
          })}

        {isValidating ? (
          <div className=" flex justify-center">
            <ClipLoader
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : null}
      </div>
      {!isValidating && response && (
        <div className=" mx-3 mt-4 flex justify-between">
          <button
            className=" rounded-md bg-white p-1"
            onClick={() => {
              const prevUrl = response?.prevUrl || "";

              if (prevUrl === "") {
                window.alert("첫 회차입니다.");
                return;
              }
              onSubmitHandler(prevUrl);
              window.scrollTo(0, 0);
            }}
          >
            이전화
          </button>
          <button
            className=" rounded-md bg-white p-1"
            onClick={() => {
              const nextUrl = response?.nextUrl || "";
              if (nextUrl === "") {
                window.alert("마지막 회차입니다.");
                return;
              }
              onSubmitHandler(nextUrl);
              window.scrollTo(0, 0);
            }}
          >
            다음화
          </button>
        </div>
      )}
    </main>
  );
};

export default Translation;
