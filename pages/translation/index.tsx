import useState from "react-usestateref";

enum Creator {
  Me = 0,
  Bot = 1,
}

interface MessageProps {
  text: string;
  from: Creator;
  key: number;
  texts: [Array<any>, Array<any>];
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

    const myMessage: MessageProps = {
      text: input,
      from: Creator.Me,
      key: new Date().getTime(),
      texts: [[""], [""]],
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
    // console.log(response);
    if (response.text) {
      const botMessage: MessageProps = {
        text: response.text,
        from: Creator.Bot,
        key: new Date().getTime(),
        texts: response.texts,
      };
      setMessages(botMessage);
      //   console.log(botMessage);
    } else {
      //   console.log("erorr");
    }
  };
//   console.log(messages);

  return (
    <main className=" relative max-w-2xl mx-auto mt-6">
      <div className=" sticky top-0 w-full px-4">
        <ChatInput onSend={(input) => callApi(input)} disabled={loading} />
      </div>
      <div className=" mt-10 px-4">
        <h2>{messages?.subTitle}</h2>
        {messages &&
          (messages?.texts[0] || [""]).map((item: any, i: any) => (
            <div className=" pt-6" key={i}>
              <div>{item}</div>
              <div className=" ">{messages?.texts?.[1]?.[i]}</div>
            </div>
          ))}
      </div>
    </main>
  );
};
{
  /* https://read.qidian.com/chapter/Gyliu2kLjSQ1/BGWJ7ZiYylE1/ */
}
export default Translation;
