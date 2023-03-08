import useState from "react-usestateref";
import ClipLoader from "react-spinners/ClipLoader";
import useSWR, { mutate, useSWRConfig } from "swr";
import { useSession } from "next-auth/react";

interface MessageProps {
  subTitle: string;
  nextUrl?: string;
  prevUrl?: string;
  originalTextArray: string[];
  translatedTextArray: string[];
  rawSubTitle: string;
}

interface InputProps {
  onSend: (input: string) => void;
  disabled: boolean;
}

const ChatInput = ({ onSend, disabled }: InputProps) => {
  const [input, setInput] = useState("");

  const sendInput = () => {
    onSend(input);
    setInput("");
  };

  const handleKeyDown = (event: any) => {
    //when pressing enter
    if (event.keyCode === 13) {
      sendInput();
    }
  };

  return (
    <div>
      <input
        className=" w-full py-2 px-3 text-gray-800 rounded-lg focus:outline-none"
        value={input}
        onChange={(ev: any) => setInput(ev.target.value)}
        type="text"
        placeholder="URL을 입력하세요(현재 치디엔만 지원, 데스크탑 URL만)"
        disabled={false}
        onKeyDown={(ev) => handleKeyDown(ev)}
      ></input>
    </div>
  );
};

const Translation = () => {
  const { data: session, status } = useSession();
  const [messages, setMessages, messagesRef] = useState<MessageProps>();
  let [queryString, setQueryString] = useState("");
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
  let { data: response, isValidating } = useSWR<any>(
    ["/api/translation", queryString],
    customFetcher,
    {
      revalidateOnMount: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshWhenOffline: false,
      refreshWhenHidden: false,
      refreshInterval: 0,
    }
  );
  console.log(response);
  const onSubmitHandler = async (input: string) => {
    if (!session) {
      alert("로그인이 필요합니다.");
      return;
    }
    if (
      !input.startsWith("https://read.qidian.com/chapter") &&
      !input.startsWith("https://www.uukanshu.com")
    ) {
      alert("잘못된 입력입니다.");
      return;
    }

    const check = async () => {
      // if (input.startsWith("https://www.uukanshu.com")) {
      //   if (input.includes("undefined")) {
      //     alert("첫 페이지 혹은 마지막 페이지입니다.");
      //     return;
      //   }
      // }
      // if (input.startsWith("https://www.uukanshu.com")) {
      //   if (input.includes("undefined")) {
      //     alert("첫 페이지 혹은 마지막 페이지입니다.");
      //     return;
      //   }
      // }
      if (!input.startsWith("https://")) {
        input = "https://" + input;
      }
      setQueryString(input);
    };

    await check();
    // console.log(response);
    // const newData = await mutate(
    //   ["/api/translation", queryString],
    //   customFetcher("/api/translation", queryString)
    // );
    // console.log(newData);
    // const myMessage: MessageProps = {
    //   subTitle: "",
    //   nextUrl: "",
    //   prevUrl: "",
    //   originalTextArray: [""],
    //   translatedTextArray: [""],
    //   rawSubTitle: "",
    // };

    // response = {
    //   ...response,
    //   rawSubTitle: response?.originalTextArray?.at(-1),
    //   translatedsubTitle: response?.translatedTextArray?.at(-1)
    // };

    const rawSubTitle = await response?.originalTextArray?.at(-1);
    const translatedsubTitle = await response?.translatedTextArray?.at(-1);

    // let botMessage: MessageProps = {
    //   subTitle: await translatedsubTitle,
    //   nextUrl: await response?.nextUrl,
    //   prevUrl: await response?.prevUrl,
    //   originalTextArray: await response?.originalTextArray,
    //   translatedTextArray: await response?.translatedTextArray,
    //   rawSubTitle: (await rawSubTitle) || "",
    // };
    // setMessages(botMessage);
  };

  // const rawSubTitle = response?.originalTextArray?.at(-1);
  // const translatedsubTitle = response?.translatedTextArray?.at(-1);
  // const length = response?.originalTextArray.length;

  return (
    <main className=" relative max-w-2xl mx-auto mt-6">
      <div className=" mb-2 text-gray-500">
        지원사이트 목록: qidian, uukanshu
      </div>
      <div className=" sticky top-0 w-full px-4">
        <ChatInput
          onSend={(input) => {
            onSubmitHandler(input);
          }}
          disabled={false}
        />
      </div>
      <div className=" mt-10 px-4">
        <h2 className=" font-semibold text-xl w-fit">
          {response?.originalTextArray.at(-1)}
        </h2>
        <div className=" font-semibold text-xl w-fit">
          {response?.translatedTextArray.at(-1)}
        </div>
        {response &&
          (response?.originalTextArray || [""]).map((item: any, i: any) => {
            if (i === response?.originalTextArray.length - 1) return;
            return (
              <div className=" pt-6" key={i}>
                <div>{item}</div>
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
        <div className=" flex justify-between">
          <button
            className=" bg-white p-1 rounded-md"
            onClick={() => {
              const prevUrl = response?.prevUrl || "";
              if (prevUrl === "") {
                window.alert("첫 회차입니다.");
                return;
              }
              onSubmitHandler(prevUrl);
            }}
          >
            이전화
          </button>
          <button
            className=" bg-white p-1 rounded-md"
            onClick={() => {
              const nextUrl = response?.nextUrl || "";
              if (nextUrl === "") {
                window.alert("마지막 회차입니다.");
                return;
              }
              onSubmitHandler(nextUrl);
            }}
          >
            다음화
          </button>
        </div>
      )}
    </main>
  );
};
{
  /* https://read.qidian.com/chapter/Gyliu2kLjSQ1/BGWJ7ZiYylE1/ */
}
export default Translation;
