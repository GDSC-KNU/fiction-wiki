import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";

const create: NextPage = () => {
  const [data, setData] = useState(null);

  const url =
    "http://wiki.fictiondbs.com/api.php?origin=%2A&action=query&prop=revisions&titles=%EC%8B%A0%EB%B9%84%EC%9D%98+%EC%A0%9C%EC%99%95&rvslots=%2A&rvprop=content&formatversion=2&format=json";
  // "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const getData = async () => {
    const datas = await axios.get(url);
    setData(datas.data);
    return datas.data;
  };

  const information: any = [];

  const parsing = async () => {
    const html = await getData();
    let title = html?.query.pages["0"].title;
    information.push(title);
    let dataWrap = html?.query.pages["0"].revisions?.["0"].slots.main.content;
    let keywords = html?.query.pages["0"].revisions?.["0"].slots.main.content;
    // console.log(title);
    console.log(dataWrap.slice(1, 1000));

    // console.log(keywords?.match);
    // console.log(keywords?.match(/\{(.+)\}(.+)/));
    // console.log(keywords?.match(/[{](.*?)[}]/g));
    console.log(keywords?.match(/(?<=\=)(.*?)(?=\=)/g));
    let arr = keywords.split("|").slice(1, 10);
    console.log(arr);
    // console.log(information);
  };

  useEffect(() => {
    parsing();
  }, []);

  return (
    <div>
      <div className=" text-3xl mb-24">asd{information}</div>
    </div>
  );
};

export default create;
