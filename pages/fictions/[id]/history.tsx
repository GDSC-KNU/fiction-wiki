import React, {useState,useEffect} from "react";

interface Items{
  title: any;
  cardTitle: any;
  updateDate: any;
  media: {
    type: any;
    source: {
      url: any;
    };
  };
}


function History() {
  const items: Items[] = [
    {
      title: "Title A",
      cardTitle: "Content A",
      updateDate: "July 1, 2023 4:40 AM",
      media: {
        type: "IMAGE",
        source: {
          url: "https://example.com/file-a.png",
        },
      },
    },
    {
      title: "Title B",
      cardTitle: "Content B",
      updateDate: "July 2, 2023 3:20 PM",
      media: {
        type: "IMAGE",
        source: {
          url: "https://example.com/file-b.png",
        },
      },
    },
    {
      title: "Title C",
      cardTitle: "Content C",
      updateDate: "July 3, 2023 5:10 PM",
      media: {
        type: "IMAGE",
        source: {
          url: "https://example.com/file-c.png",
        },
      },
    },
    {
      title: "Title D",
      cardTitle: "Content D",
      updateDate: "July 4, 2023 2:10 PM",
      media: {
        type: "IMAGE",
        source: {
          url: "https://example.com/file-d.png",
        },
      },
    },
    {
      title: "Title E",
      cardTitle: "Content E",
      updateDate: "July 5, 2023 4:10 PM",
      media: {
        type: "IMAGE",
        source: {
          url: "https://example.com/file-e.png",
        },
      },
    },
    {
      title: "Title F",
      cardTitle: "Content F",
      updateDate: "July 6, 2023 4:10 PM",
      media: {
        type: "IMAGE",
        source: {
          url: "https://example.com/file-f.png",
        },
      },
    },
    {
      title: "Title A",
      cardTitle: "Content A",
      updateDate: "July 6, 2023 4:10 PM",
      media: {
        type: "IMAGE",
        source: {
          url: "https://example.com/file-f.png",
        },
      },
    },

  ];

  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    window.innerWidth >= 800
  );
  
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-3/4 h-screen mx-auto">
      <div className="w-full h-1/6 my-2 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl text-center font-bold">
          Wiki History
        </h1>
        <p className="text-xs md:text-xl text-center">
          A timeline of changes for this wiki
        </p>
      </div>
      <div className="border-2 flex flex-row md:w-full h-auto rounded-lg">
        <div className="w-auto hidden md:flex">
          <img className="h-auto m-2 rounded-lg" src={item.media.source.url} alt="test" />
        </div>
        <div className="w-5/6 h-auto m-5 ml-8">
          <h1 className="text-xl line-clamp-1 font-bold">
            Robert F. Kennedy Jr.’s Views on Cryptocurrency
          </h1>
          <p className="text-s w-auto line-clamp-3 mt-2">
            Robert F. Kennedy (RFK) Jr. (born January 17, 1954) is an American
            environmental lawyer, politician, and writer who is running in the
            2024 US Presidential election as a Democrat. He is the son of U.S.
            attorney general and Senator Robert F. Kennedy and nephew of U.S.
            President John F. Kennedy.
          </p>
        </div>
      </div>
      <div className="w-full h-full flex flex-row justify-center mt-2">
        {isLargeScreen ? (
          <>
            <div className="h-full w-1/2 mt-10 flex flex-col items-center">
              {items.map((item, index) => {
                if (index % 2 === 1) {
                  return (
                    <div
                      className="w-3/4 h-1/6 border-2 rounded-lg mt-20 ml-20 flex flex-row justify-between items-center"
                      key={index}
                    >
                      <div className="w-full">
                        <div className="flex flex-row justify-between items-center mb-4">
                          <div className="flex flex-row items-center">
                            <img
                              className="h-6 w-6 m-2 rounded-full"
                              src={item.media.source.url}
                              alt={item.title}
                            />
                            <h2 className="">{item.title}</h2>
                          </div>
                          <p className="text-xs">{item.updateDate}</p>
                        </div>
                        <h3 className="mb-8">{item.cardTitle}</h3>
                      </div>
                      <div className="w-3 h-3 border-t-2 border-r-2 rotate-45 border-gray-200 relative left-2"></div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <div className="w-1 h-full border-2"></div>
            <div className="w-1/2 mt-10 flex flex-col justify-center items-center">
              {items.map((item, index) => {
                if (index % 2 === 0) {
                  return (
                    <div
                      className="w-3/4 h-1/6 border-2 rounded-lg mb-20 mr-20 flex flex-row justify-between items-center"
                      key={index}
                    >
                      <div className="w-3 h-3 border-b-2 border-l-2 rotate-45 border-gray-200 relative right-2"></div>
                      <div className="w-full">
                        <div className="flex flex-row justify-between items-center mb-4">
                          <div className="flex flex-row items-center">
                            <img
                              className="h-6 w-6 m-2 rounded-full"
                              src={item.media.source.url}
                              alt={item.title}
                            />
                            <h2 className="">{item.title}</h2>
                          </div>
                          <p className="text-xs">{item.updateDate}</p>
                        </div>
                        <h3 className="mb-8">{item.cardTitle}</h3>
                      </div>
                  </div>
                  );
                }
                return null;
              })}
            </div>
          </>
        ) : (
          <div className="w-screen h-full flex flex-row">
            <div className="h-full border-r-4"/>
              <div className="w-full ml-2">
                {items.map((item, index) => (
                  <div
                    className={"w-full h-1/6 border-2 mt-4 rounded-md flex items-center"}
                    key={index}
                  > 
                    <div className="w-2 h-2 border-b-2 border-l-2 rotate-45 relative right-1.5"/>
                    <div className="w-full">
                        <div className="flex flex-row justify-between items-center mb-4">
                          <div className="flex flex-row items-center">
                            <img
                              className="h-6 w-6 m-2 rounded-full"
                              src={item.media.source.url}
                              alt={item.title}
                            />
                            <h2 className="">{item.title}</h2>
                          </div>
                          <p className="text-xs">{item.updateDate}</p>
                        </div>
                        <h3 className="mb-8">{item.cardTitle}</h3>
                      </div>
                  </div>
                ))}
              </div>
            </div>
        )}
      </div>
    </div>
  );
}

export default History;



