import axios from "axios";
import { Glossary } from "@prisma/client";
import crypto from "crypto";
import CryptoJS from "crypto-js";
import client from "@libs/server/client";

function makeSignature({
  naverAccessKey,
  naverSecretKey,
  timestamp,
  url,
  method,
}: {
  naverAccessKey: string;
  naverSecretKey: string;
  timestamp: any;
  url: string;
  method: string;
}) {
  const space = " ";
  const newLine = "\n";

  // const message = `${method} ${url}\n${strTimestamp}\n${accessKey}`;
  // const message = `${method}${space}${url}${newLine}${timestamp}${newLine}${accessKey}`;

  let hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, naverSecretKey);
  hmac.update(method);
  hmac.update(space);
  hmac.update(url);
  hmac.update(newLine);
  hmac.update(timestamp);
  hmac.update(newLine);
  hmac.update(naverAccessKey);

  let hash = hmac.finalize();

  return hash.toString(CryptoJS.enc.Base64);
}

function convertToCSV(glossaries: Glossary[]) {
  let csv = "zh-CN,ko\n"; // headers
  glossaries.forEach((glossary) => {
    csv += `${glossary.chinese},${glossary.korean}\n`;
  });
  return csv;
}

const useUploadCSV = ({
  // glossaryTitle,
  originalTitle,
  naverAccessKey,
  naverSecretKey,
  // glossaryUrl,
  id: fictionId,
  userId,
}: {
  // glossaryTitle?: string;
  originalTitle: string | undefined;
  naverAccessKey: string;
  naverSecretKey: string;
  // glossaryUrl: string | undefined;
  id: number | undefined;
  userId: string;
}) => {
  const baseurl = "https://papago.apigw.ntruss.com";

  const createGlossary = async () => {
    const method = "POST";
    const url = `/glossary/v1/create`;
    const fullUrl = `${baseurl}${url}`;
    const timestamp = Date.now().toString();

    const signature = makeSignature({
      naverAccessKey,
      naverSecretKey,
      timestamp,
      url,
      method,
    });
    // console.log(
    //   naverAccessKey,
    //   naverSecretKey,
    //   timestamp,
    //   url,
    //   method,
    //   signature
    // );
    const headers = {
      "X-NCP-APIGW-TIMESTAMP": timestamp,
      "X-NCP-IAM-ACCESS-KEY": naverAccessKey,
      "X-NCP-APIGW-SIGNATURE-V2": signature,
    };

    const params = {
      glossaryName: `fdbs-${originalTitle}`,
      description: "Glossary1 용어집 설명 입니다.",
    };

    try {
      const response = await axios.post(fullUrl, params, { headers });
      return response;
    } catch (err: any) {
      console.log(err?.response?.data);
      return false;
    }
  };

  const deleteGlossary = async (glossaryKey: string) => {
    const method = "DELETE";
    const url = `/glossary/v1/${glossaryKey}`;
    const fullUrl = `${baseurl}${url}`;
    const timestamp = Date.now().toString();

    const signature = makeSignature({
      naverAccessKey,
      naverSecretKey,
      timestamp,
      url,
      method,
    });

    const headers = {
      "x-ncp-apigw-timestamp": timestamp,
      "x-ncp-iam-access-key": naverAccessKey,
      "x-ncp-apigw-signature-v2": signature,
    };

    try {
      const deleteResponse = await axios.delete(fullUrl, { headers });
      if (deleteResponse) return deleteResponse;
    } catch (err: any) {
      console.log(err?.response?.data);
      return false;
    }
  };

  const uploadFile = async (glossaryKey: string, csvData: any) => {
    // console.log("user and fictionId: ", userId, fictionId);
    const method = "POST";
    const url = `/glossary/v1/${glossaryKey}/upload`;
    const fullUrl = `${baseurl}${url}`;
    const timestamp = Date.now().toString();
    const signature = makeSignature({
      naverAccessKey,
      naverSecretKey,
      timestamp,
      url,
      method,
    });

    const headers = {
      "X-NCP-APIGW-TIMESTAMP": timestamp,
      "X-NCP-IAM-ACCESS-KEY": naverAccessKey,
      "X-NCP-APIGW-SIGNATURE-V2": signature,
    };

    const formData = new FormData();
    const blob = new Blob([csvData], { type: "text/csv" });
    formData.append("file", blob, "glossary_file.csv");

    try {
      const response = await axios.post(fullUrl, formData, { headers });
      return response;
    } catch (err: any) {
      console.log(err?.response?.data);
      return false;
    }
  };

  const upload = async (glossaries: Glossary[]) => {
    const glossaryFolder = await createGlossary();
    const csvData = convertToCSV(glossaries);
    if (glossaryFolder) {
      const glossaryKey = glossaryFolder?.data?.data?.glossaryKey;
      const response: any = await uploadFile(glossaryKey, csvData);
      const userGlossaryKey = await response?.data?.data?.glossaryKey;

      const newFav = await client.fav.create({
        data: {
          user: {
            connect: {
              id: userId,
            },
          },
          fiction: {
            connect: {
              id: +fictionId!.toString(),
            },
          },
          glossaryKey: userGlossaryKey,
        },
      });
      // console.log(newFav);
      //
      return userGlossaryKey;
    } else {
      // title로 glossarykey를 가져와야 하는데 가져올 방법이 없음
    }
  };

  const replace = async (glossaryKey: string, glossaries: Glossary[]) => {
    let newGlossaryKey;
    const deletion = await deleteGlossary(glossaryKey);

    const csvData = convertToCSV(glossaries);
    const newGlossaryFolder = await createGlossary();

    if (newGlossaryFolder) {
      newGlossaryKey = newGlossaryFolder?.data?.data?.glossaryKey;
      const updation = await uploadFile(newGlossaryKey, csvData);

      //db-user-fav-glossaryKey 갱신
      const updatedFav = await client.fav.update({
        where: {
          favIdentifier: {
            userId: userId,
            fictionId: +fictionId!.toString(),
          },
        },
        data: {
          glossaryKey: newGlossaryKey,
        },
      });
    }

    // if (newGlossary) {
    //   newGlossaryKey = newGlossary?.data?.data?.glossaryKey;
    // }

    //db update

    return newGlossaryKey;
  };

  return { upload, replace };
};

export default useUploadCSV;

///
/// fiction id를 통해 번역을 실행하려는 작품의 glossary(url)가 있는지 확인
/// glossary가 있다면 해당 glossary를 가져와 유저 fdbTempGlossary를 replace?
/// replace를 어떻게? upload만 하면되는가 아니면 delete후 create & upload?
/// glossary가 없다면 create & upload

// 최종적으로 glossary key를 가져와 custom translator에 넣어줘야함
