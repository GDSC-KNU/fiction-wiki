import React, { useCallback, useEffect, useState } from "react";
import Button from "@components/button";
import FictionRadarChart from "@components/fictionRadarChart";
import Input from "@components/input";
import Textarea from "@components/textarea";
import useMutation from "@libs/client/useMutation";
import {
  Author,
  Category,
  Fiction,
  Keyword,
  KeywordsOnFictions,
  UserRationOnFiction,
} from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FieldErrors, useForm } from "react-hook-form";
import Image from "next/image";
import useSWR from "swr";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

interface EditFictionForm {
  title: string;
  author: string;
  nationality: string;
  genre: string;
  date: Date[];
  status: number[];
  synopsis: string;
  characters: string;
  currentState: string;
  keywords: string[];
  mcKeywords: string[];
  subKeywords: string[];
  consKeywords: string[];
  original: string;
  platforms: string[];
  thumb?: FileList;
  volume?: number;
  isTranslated?: string;
  relatedTitle?: string;
  relatedAuthor?: string;
  type?: string;
  mediaMix?: string;
  setup?: string;
}

interface EditFictionMutation {
  ok: boolean;
  fiction: Fiction;
}

interface FictionDetailResponse {
  ok: boolean;
  prevFiction: FictionWithMore;
  similarFictions: Fiction[];
  isLiked: boolean;
}

interface KeywordsOnFictionsWithMore extends KeywordsOnFictions {
  keyword: Keyword;
}

interface FictionWithMore extends Fiction {
  keywords: [KeywordsOnFictionsWithMore];
  fictionStat: {
    originality: number;
    writing: number;
    character: number;
    verisimilitude: number;
    synopsisComposition: number;
    value: number;
  };
  userFictionStat: { userRationOnFictions: [UserRationOnFiction] };
  author: Author;
  categories: [Category];
}

const EditFiction: NextPage = () => {
  ///setup MdEditor
  const [md, setMd] = useState<string | undefined>("");
  const handleChange = useCallback((md: any) => {
    setMd(md);
  }, []);

  const router = useRouter();
  const { data: fiction } = useSWR<FictionDetailResponse>(
    router.query.id
      ? typeof window === "undefined"
        ? null
        : `/api/fictions/${router.query.id}`
      : null
  );
  const [editFiction, { loading, data }] = useMutation<EditFictionMutation>(
    `/api/fictions/${router.query.id}`
  );
  const { register, handleSubmit, resetField, watch, setValue } =
    useForm<EditFictionForm>({ mode: "onBlur" });

  //날짜변환 function
  function formatDate(date: any) {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  // console.log(fiction?.prevFiction);
  console.log(md);
  // console.log(
  //   fiction?.prevFiction?.categories.reduce(
  //     (prev, cur) =>
  //       (prev?.category?.name ?? "") + " " + (cur?.category?.name ?? ""),
  //     ""
  //   )
  // );
  useEffect(() => {
    if (fiction) {
      setValue("title", fiction.prevFiction.title);
      setValue("relatedTitle", fiction.prevFiction.relatedTitle || "");
      setValue("author", fiction.prevFiction.author?.name || "");
      setValue("relatedAuthor", fiction.prevFiction.relatedAuthor || "");
      setValue("nationality", fiction.prevFiction.nationality);
      setValue("type", fiction.prevFiction.type || "");
      setValue(
        "genre",
        fiction?.prevFiction?.categories
          .reduce(
            (prev: any, cur: any) =>
              (prev?.category?.name ?? "") + " " + (cur?.category?.name ?? ""),
            ""
          )
          .trim()
      );
      setValue("original", fiction.prevFiction.original);
      setValue("platforms", [fiction.prevFiction.platforms]);
      setValue("currentState", fiction.prevFiction.currentState);
      setValue("synopsis", fiction.prevFiction.synopsis);
      setValue("characters", fiction.prevFiction.characters);
      setValue("date.0", formatDate(fiction.prevFiction.startDate) as any);
      setValue("date.1", formatDate(fiction.prevFiction.endDate) as any);
      setValue("currentState", fiction.prevFiction.currentState);
      setValue("status.0", fiction.prevFiction.fictionStat.originality);
      setValue("status.1", fiction.prevFiction.fictionStat.writing);
      setValue("status.2", fiction.prevFiction.fictionStat.character);
      setValue("status.3", fiction.prevFiction.fictionStat.verisimilitude);
      setValue("status.4", fiction.prevFiction.fictionStat.synopsisComposition);
      setValue("status.5", fiction.prevFiction.fictionStat.value);
      setValue("volume", fiction?.prevFiction.volume || 0);
      setValue("mediaMix", fiction.prevFiction.mediaMix || "");
      setValue("isTranslated", fiction.prevFiction.isTranslated || "");
      if (md === "") {
        setMd(fiction.prevFiction.setup || "");
      }
      // console.log(md);
      // setValue("setup", fiction.prevFiction.setup || "");
      // Keywords, mcKeywords, subKeywords
      fiction.prevFiction.keywords
        .filter(
          (item) =>
            item.keyword.isOfHeroine === false &&
            item.keyword.isOfMC === false &&
            item.keyword.isOfCons === false
        )
        .map((item, i) => setValue(`keywords.${i}`, item.keyword.name));
      fiction.prevFiction.keywords
        .filter((item) => item.keyword.isOfMC === true)
        .map((item, i) => setValue(`mcKeywords.${i}`, item.keyword.name));
      fiction.prevFiction.keywords
        .filter((item) => item.keyword.isOfHeroine === true)
        .map((item, i) => setValue(`subKeywords.${i}`, item.keyword.name));
      fiction.prevFiction.keywords
        .filter((item) => item.keyword.isOfCons === true)
        .map((item, i) => setValue(`consKeywords.${i}`, item.keyword.name));
      // setValue("keywords.0", "asd");
    }
  }, [fiction, setValue]);
  // console.log(fiction);
  // console.log(fiction?.prevFiction.genre);

  const onValid = async (data: EditFictionForm) => {
    if (loading) return;
    if (data.thumb && data.thumb.length > 0) {
      const { uploadURL } = await (await fetch(`/api/files`)).json();
      const form = new FormData();
      form.append("file", data.thumb[0], data.title);
      const {
        result: { id },
      } = await (await fetch(uploadURL, { method: "POST", body: form })).json();
      editFiction({ ...data, thumbId: id, setup: md }, "PUT");
    } else {
      editFiction({ ...data, setup: md }, "PUT");
    }
    return;
  };

  useEffect(() => {
    if (data?.ok) {
      router.push(`/fictions/${data.fiction.id}`);
    }
  }, [data, router]);
  const [thumbPreview, setThumbPreview] = useState("");
  const thumb = watch("thumb");

  useEffect(() => {
    if (thumb && thumb.length > 0) {
      const file = thumb[0];
      setThumbPreview(URL.createObjectURL(file));
    }
  }, [thumb]);

  const onInvalid = (errors: FieldErrors) => {
    if (loading) return;
    if (errors) return;
  };

  /// watch state (react-hook-form)
  let wKeywords: string[] = watch().keywords;
  let wKeywords2: string[] = watch().mcKeywords;
  let wKeywords3: string[] = watch().subKeywords;
  let wKeywords4: string[] = watch().consKeywords;
  let wStatus: number[] = watch().status;

  const onKeyDown: any = (e: any) => {
    const { key } = e;
    // console.log(key);
    // console.log(wKeywords);

    if (key === "," && wKeywords[0].trim() !== "") {
      e.preventDefault();

      if (!wKeywords.slice(1).includes(wKeywords[0].trim())) {
        wKeywords[0] = wKeywords[0].trim();
        wKeywords.filter((item) => item !== " ");
        setValue("keywords", [wKeywords[0], ...wKeywords]);
      }
      // console.log(wKeywords);
      resetField("keywords.0");
    }
  };

  const onKeyDown2: any = (e: any) => {
    const { key } = e;
    // console.log(key);

    if (key === "," && wKeywords2[0].trim() !== "") {
      e.preventDefault();

      if (!wKeywords2.slice(1).includes(wKeywords2[0].trim())) {
        wKeywords2[0] = wKeywords2[0].trim();
        wKeywords2.filter((item) => item !== " ");
        setValue("mcKeywords", [wKeywords2[0], ...wKeywords2]);
      }
      // console.log(wKeywords2);
      resetField("mcKeywords.0");
    }
  };

  const onKeyDown3: any = (e: any) => {
    const { key } = e;
    // console.log(key);

    if (key === "," && wKeywords3[0].trim() !== "") {
      e.preventDefault();

      if (!wKeywords3.slice(1).includes(wKeywords3[0].trim())) {
        wKeywords3[0] = wKeywords3[0].trim();
        wKeywords3.filter((item) => item !== " ");
        setValue("subKeywords", [wKeywords3[0], ...wKeywords3]);
      }
      // console.log(wKeywords3);
      resetField("subKeywords.0");
    }
  };

  const onKeyDown4: any = (e: any) => {
    const { key } = e;
    console.log(key);

    if (key === "," && wKeywords4[0].trim() !== "") {
      e.preventDefault();

      if (!wKeywords4.slice(1).includes(wKeywords4[0].trim())) {
        wKeywords4[0] = wKeywords4[0].trim();
        wKeywords4.filter((item) => item !== " ");
        setValue("consKeywords", [wKeywords4[0], ...wKeywords4]);
      }
      console.log(wKeywords4);
      resetField("consKeywords.0");
    }
  };

  return (
    <>
      <div>
        <form className=" w-[90vw]" onSubmit={handleSubmit(onValid, onInvalid)}>
          <div className=" max-w-[1500px]">
            <div className=" grid grid-cols-1 sm:grid-cols-5 ">
              <div className=" bg-white col-span-2 mx-5 mt-7 h-fit border-[0.5px] border-[#BBBBBB] rounded-md overflow-hidden">
                <div className=" min-h-[330px] w-full">
                  {thumbPreview ? (
                    <label className=" relative pb-100 w-full cursor-pointer text-gray-600 hover:border-blue-500 hover:text-blue-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-[330px] rounded-md">
                      <Image
                        className=" object-cover"
                        src={thumbPreview || "/"}
                        layout="fill"
                        alt="thumbnail"
                      />
                      <input
                        {...register("thumb")}
                        className="hidden"
                        type="file"
                      />
                    </label>
                  ) : (
                    <label className="w-full cursor-pointer text-gray-600 hover:border-blue-500 hover:text-blue-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-[330px] rounded-md">
                      <svg
                        className="h-12 w-12"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <input
                        {...register("thumb")}
                        className="hidden"
                        type="file"
                      />
                    </label>
                  )}
                </div>
                <div className=" px-4 py-3">
                  <Input
                    register={register("title", { required: true })}
                    required
                    label="Title"
                    name="title"
                    type="text_detail"
                  />
                  <Input
                    register={register("relatedTitle", { required: false })}
                    required={false}
                    label="RelatedTitle"
                    name="relatedTitle"
                    type="text_detail"
                  />
                  <Input
                    register={register("author", { required: true })}
                    required
                    label="Author"
                    name="author"
                    type="text_detail"
                  />
                  <Input
                    register={register("relatedAuthor", { required: false })}
                    required={false}
                    label="RelatedAuthor"
                    name="relatedAuthor"
                    type="text_detail"
                  />
                  <Input
                    register={register("type", { required: false })}
                    required={false}
                    label="Type"
                    name="type"
                    type="text_detail"
                  />
                  <Input
                    register={register("nationality", { required: true })}
                    required
                    label="Nationality"
                    name="nationality"
                    type="text_detail"
                  />
                  <Input
                    register={register("genre")}
                    required
                    label="Genre"
                    name="genre"
                    type="text_detail"
                  />
                  <div className=" flex relative items-center justify-between">
                    <div className=" w-[48%]">
                      <Input
                        register={register("date.0")}
                        required
                        label="StartDate"
                        name="startDate"
                        type="date"
                      />
                    </div>
                    <div className=" w-[48%]">
                      <Input
                        register={register("date.1")}
                        required
                        label="EndDate"
                        name="endDate"
                        type="date"
                      />
                    </div>
                  </div>
                  <Input
                    register={register("original", { required: true })}
                    required
                    label="Original"
                    name="original"
                    type="text"
                  />
                  <Input
                    register={register("platforms.0")}
                    required
                    label="Platforms"
                    name="platforms"
                    type="text"
                  />
                  <Input
                    register={register("currentState")}
                    required
                    label="CurrentState"
                    name="currentState"
                    type="text"
                  />
                  <Input
                    register={register("volume")}
                    required
                    label="Volume"
                    name="volume"
                    type="text_detail"
                  />
                  <Input
                    register={register("mediaMix")}
                    required={false}
                    label="MediaMix"
                    name="mediaMix"
                    type="text_detail"
                  />
                  <Input
                    register={register("isTranslated", { required: false })}
                    required={false}
                    label="IsTranslated"
                    name="isTranslated"
                    type="text_detail"
                  />
                </div>
              </div>
              <div className=" col-span-3 mx-5 mt-7">
                <div className=" grid  sm:grid-cols-1">
                  <div className=" mb-10 pb-3 px- w-full bg-white border-[0.5px] border-[#BBBBBB] rounded-md overflow-hidden">
                    <h2 className=" font-bold pt-1 px-2">Keywords</h2>
                    <input
                      className=" w-full"
                      {...register("keywords.0")}
                      type="text"
                      placeholder=" 키워드(,를 눌러서 입력하세요)"
                      onKeyDown={onKeyDown}
                    ></input>
                    <ul className=" grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-5 pt-3 px-3">
                      {wKeywords
                        ?.filter((item) => item !== undefined)
                        .map((item, index) => (
                          <li
                            className=" bg-[#3D414D] text-white text-sm text-center ring-offset-1 mx-1 my-1 rounded-md h-fit hover:cursor-pointer"
                            key={index}
                            onClick={(e) => {
                              wKeywords = wKeywords.filter(
                                (item) => item !== e.currentTarget.innerHTML
                              );
                              setValue("keywords", wKeywords);
                            }}
                          >
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className=" mb-10 pb-3 px- w-full bg-white border-[0.5px] border-[#BBBBBB] rounded-md overflow-hidden">
                    <h2 className=" font-bold pt-1 px-2">Mc Keywords</h2>
                    <input
                      className=" w-full"
                      {...register("mcKeywords.0")}
                      type="text"
                      placeholder=" 키워드(,를 눌러서 입력하세요)"
                      onKeyDown={onKeyDown2}
                    ></input>
                    <ul className=" grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-5 pt-3 px-3">
                      {wKeywords2
                        ?.filter((item) => item !== undefined)
                        .map((item, index) => (
                          <li
                            className=" bg-[#3D414D] text-white text-sm text-center ring-offset-1 mx-1 my-1 rounded-md h-fit hover:cursor-pointer"
                            key={index}
                            onClick={(e) => {
                              wKeywords2 = wKeywords2.filter(
                                (item) => item !== e.currentTarget.innerHTML
                              );
                              setValue("mcKeywords", wKeywords2);
                            }}
                          >
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className=" mb-10 pb-3 px- w-full bg-white border-[0.5px] border-[#BBBBBB] rounded-md overflow-hidden">
                    <h2 className=" font-bold pt-1 px-2">Sub Keywords</h2>
                    <input
                      className=" w-full"
                      {...register("subKeywords.0")}
                      type="text"
                      placeholder=" 키워드(,를 눌러서 입력하세요)"
                      onKeyDown={onKeyDown3}
                    ></input>
                    <ul className=" grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-5 pt-3 px-3">
                      {wKeywords3
                        ?.filter((item) => item !== undefined)
                        .map((item, index) => (
                          <li
                            className=" bg-[#3D414D] text-white text-sm text-center ring-offset-1 mx-1 my-1 rounded-md h-fit hover:cursor-pointer"
                            key={index}
                            onClick={(e) => {
                              wKeywords3 = wKeywords3.filter(
                                (item) => item !== e.currentTarget.innerHTML
                              );
                              setValue("subKeywords", wKeywords3);
                            }}
                          >
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className=" mb-10 pb-3 px- w-full bg-white border-[0.5px] border-[#BBBBBB] rounded-md overflow-hidden">
                    <h2 className=" font-bold pt-1 px-2">Cons Keywords</h2>
                    <input
                      className=" w-full"
                      {...register("consKeywords.0")}
                      type="text"
                      placeholder=" 키워드(,를 눌러서 입력하세요)"
                      onKeyDown={onKeyDown4}
                    ></input>
                    <ul className=" grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-5 pt-3 px-3">
                      {wKeywords4
                        ?.filter((item) => item !== undefined)
                        .map((item, index) => (
                          <li
                            className=" bg-[#3D414D] text-white text-sm text-center ring-offset-1 mx-1 my-1 rounded-md h-fit hover:cursor-pointer"
                            key={index}
                            onClick={(e) => {
                              wKeywords4 = wKeywords4.filter(
                                (item) => item !== e.currentTarget.innerHTML
                              );
                              setValue("consKeywords", wKeywords4);
                            }}
                          >
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className=" h-max bg-white mb-10 w-full border-[0.5px] border-[#BBBBBB] rounded-md overflow-x-auto">
                    <h2 className=" font-bold pt-1 px-2">graphs and charts</h2>
                    <FictionRadarChart props={wStatus} />
                    <div className=" grid grid-cols-2 mx-2">
                      <Input
                        register={register("status.0", {
                          max: 5,
                          min: 0,
                        })}
                        required
                        label="오리지널리티"
                        name="status"
                        type="number"
                        kind="status"
                      />
                      <Input
                        register={register("status.1")}
                        required
                        label="필력"
                        name="status"
                        type="number"
                        kind="status"
                      />
                      <Input
                        register={register("status.2")}
                        required
                        label="캐릭터성"
                        name="status"
                        type="number"
                        kind="status"
                      />
                      <Input
                        register={register("status.3")}
                        required
                        label="핍진성"
                        name="status"
                        type="number"
                        kind="status"
                      />
                      <Input
                        register={register("status.4")}
                        required
                        label="스토리"
                        name="status"
                        type="number"
                        kind="status"
                      />
                      <Input
                        register={register("status.5")}
                        required
                        label="작품성"
                        name="status"
                        type="number"
                        kind="status"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mx-5 my-7 bg-white px-3 py-3 border-[0.5px] border-[#BBBBBB] rounded-md overflow-hidden">
              <Textarea
                register={register("synopsis")}
                name="synopsis"
                label="Synopsis"
                required
              />
              <Textarea
                register={register("characters")}
                name="characters"
                label="Characters"
                required
              />
              <MDEditor value={md} onChange={handleChange} />
            </div>
          </div>
          <Button text={loading ? "Loading..." : "저장"} />
        </form>
      </div>
    </>
  );
};

export default EditFiction;
