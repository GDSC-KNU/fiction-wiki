export async function papagoTranslate({
  input,
  clientID,
  clientKey,
  glossaryKey,
}: {
  input: string;
  clientID: string;
  clientKey: string;
  glossaryKey?: string;
}) {
  return new Promise<string>((resolve, reject) => {
    fetch("https://naveropenapi.apigw.ntruss.com/nmt/v1/translation", {
      method: "POST",
      body: JSON.stringify({
        text: input,
        source: "zh-CN",
        target: "ko",
        glossaryKey: glossaryKey,
      }),
      headers: {
        "Content-Type": "application/json",
        "X-NCP-APIGW-API-KEY-ID": process.env.PAPAGO_CLIENT_ID || "",
        "X-NCP-APIGW-API-KEY": process.env.PAPAGO_CLIENT_SECRET || "",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        resolve(data?.message?.result?.translatedText || "");
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function papagoCustomTranslate({
  input,
  clientID,
  clientKey,
  glossaryKey,
}: {
  input: string;
  clientID: string;
  clientKey: string;
  glossaryKey?: string | undefined | null;
}) {
  // console.log(glossaryKey);

  return new Promise<string>((resolve, reject) => {
    fetch("https://naveropenapi.apigw.ntruss.com/nmt/v1/translation", {
      method: "POST",
      body: JSON.stringify({
        text: input,
        source: "zh-CN",
        target: "ko",
        glossaryKey: glossaryKey,
      }),
      headers: {
        "Content-Type": "application/json",
        "X-NCP-APIGW-API-KEY-ID": clientID || "",
        "X-NCP-APIGW-API-KEY": clientKey || "",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        resolve(data?.message?.result?.translatedText || "");
      })
      .catch((error) => {
        reject(error);
      });
  });
}
