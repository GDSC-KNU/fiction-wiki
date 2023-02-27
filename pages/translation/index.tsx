import useState from "react-usestateref";
import ClipLoader from "react-spinners/ClipLoader";

enum Creator {
  Me = 0,
  Bot = 1,
}

interface MessageProps {
  text: string;
  from: Creator;
  key: number;
  texts: [Array<any>, Array<any>];
  nextUrl: string;
  subTitle: string;
  rawSubTitle: string;
}

interface InputProps {
  onSend: (input: string) => void;
  disabled: boolean;
}

const ChatMessage = ({ text, from }: MessageProps) => {
  return (
    <>
      {from == Creator.Me && (
        <div className=" bg-white">
          <p>{text}</p>
        </div>
      )}
      {from == Creator.Bot && (
        <div className=" bg-black text-white">
          <p>{text}</p>
        </div>
      )}
    </>
  );
};

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
        placeholder="URL을 입력하세요(현재 치디엔만 지원)"
        disabled={false}
        onKeyDown={(ev) => handleKeyDown(ev)}
      ></input>
    </div>
  );
};

const Translation = () => {
  const [messages, setMessages, messagesRef] = useState<any>();
  const [loading, setLoading] = useState(false);

  const callApi = async (input: string) => {
    setLoading(true);
    if (!input.startsWith("https://")) {
      input = "https://" + input;
    }

    const myMessage: MessageProps = {
      text: input,
      from: Creator.Me,
      key: new Date().getTime(),
      texts: [[""], [""]],
      nextUrl: "",
      subTitle: "",
      rawSubTitle: "",
    };

    setMessages(myMessage);
    const response = await fetch("/api/translation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
      }),
    }).then((response) => response.json());
    setLoading(false);

    const rawSubTitle = response?.texts?.[0]?.pop();
    const subTitle = response?.texts?.[1]?.pop();
    if (response?.text) {
      const botMessage: MessageProps = {
        text: response?.text,
        from: Creator.Bot,
        key: new Date().getTime(),
        texts: response?.texts,
        rawSubTitle: rawSubTitle,
        subTitle: subTitle,
        nextUrl: response?.nextUrl,
      };
      setMessages(botMessage);
      //   console.log(botMessage);
    } else {
      //   console.log("erorr");
    }
  };

  return (
    <main className=" relative max-w-2xl mx-auto mt-6">
      <div className=" sticky top-0 w-full px-4">
        <ChatInput onSend={(input) => callApi(input)} disabled={loading} />
      </div>
      <div className=" mt-10 px-4">
        <h2 className=" font-semibold text-xl w-fit">{messages?.subTitle}</h2>
        <div className=" font-semibold text-xl w-fit">
          {messages?.rawSubTitle}
        </div>
        {messages &&
          (messages?.texts[0] || [""]).map((item: any, i: any) => (
            <div className=" pt-6" key={i}>
              <div>{item}</div>
              <div className=" ">{messages?.texts?.[1]?.[i]}</div>
            </div>
          ))}
        {loading ? (
          <div className=" flex justify-center">
            <ClipLoader
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : null}
      </div>
      {messages && (
        <div className=" flex justify-end">
          <button
            className=" bg-white p-1 rounded-md"
            onClick={() => callApi(messages?.nextUrl)}
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
