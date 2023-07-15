import FictionRadarChart from "@components/fiction/fictionRadarChart";
import useMutation from "@libs/client/useMutation";
import {
  Author,
  Category,
  Fiction,
  FictionStat,
  Keyword,
  KeywordsOnFictions,
  UserRationOnFiction,
} from "@prisma/client";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import Button from "src/components/button";
import Input from "src/components/input";
import Textarea from "src/components/textarea";
import useSWR from "swr";
import client from "@libs/server/client";

import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import remarkToc from "remark-toc";

import { FictionProvider } from "@src/context/fictionContext";
import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";

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
  originalAuthor?: string;
  type?: string;
  mediaMix?: string;
  setup?: string;
  introduction?: string;
  originalTitle?: string;
}

interface EditFictionMutation {
  ok: boolean;
  fiction: Fiction;
}

interface FictionDetailResponse {
  fiction: FictionWithMore;
  similarFictions: Fiction[];
  mbtis: any;
  setup: any;
}

interface FictionWithMore extends Fiction {
  fiction: any;
  keywords: [
    {
      keyword: Keyword;
    }
  ];
  fictionStat: FictionStat;
  userFictionStat: {
    originality: number;
    writing: number;
    verisimilitude: number;
    value: number;
    synopsisComposition: number;
    character: number;
    total: number;
    _count: {
      userRationOnFictions: number;
    };
  };
  author: Author;
  categories: [
    {
      category: Category;
    }
  ];
  comments: Comment[];
}

const EditFiction: NextPage<FictionDetailResponse> = ({
  fiction,
  similarFictions,
  mbtis,
  setup,
}) => {
  const [md, setMd] = useState<string | undefined>("");
  const handleChange = useCallback((md: any) => {
    setMd(md);
  }, []);

  const router = useRouter();
  // const { data: { fiction, mbtis } = {} } = useSWR<any>(
  //   router.query.id
  //     ? typeof window === "undefined"
  //       ? null
  //       : `/api/fictions/${router.query.id}`
  //     : null
  // );

  const [editFiction, { loading, data, error }] =
    useMutation<EditFictionMutation>(`/api/fictions/${router.query.id}`);
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

  // Form에 데이터 주입
  useEffect(() => {
    if (fiction) {
      setValue("title", fiction?.title || "");
      setValue("originalTitle", fiction?.originalTitle || "");
      setValue("relatedTitle", fiction?.relatedTitle || "");
      setValue("author", fiction?.author?.name || "");
      setValue("relatedAuthor", fiction?.relatedAuthor || "");
      setValue("nationality", fiction?.nationality || "");
      setValue("type", fiction?.type || "");
      setValue(
        "genre",
        fiction?.categories
          .reduce(
            (prev: any, cur: any) =>
              (prev?.category?.name ?? "") + " " + (cur?.category?.name ?? ""),
            ""
          )
          .trim()
      );
      setValue("original", fiction?.original);
      setValue("platforms", [fiction?.platforms]);
      setValue("currentState", fiction?.currentState);
      setValue("synopsis", fiction?.synopsis);
      setValue("characters", fiction?.characters);
      setValue("date.0", formatDate(fiction?.startDate) as any);
      setValue("date.1", formatDate(fiction?.endDate) as any);
      setValue("currentState", fiction?.currentState);
      setValue("status.0", fiction?.fictionStat.originality);
      setValue("status.1", fiction?.fictionStat.writing);
      setValue("status.2", fiction?.fictionStat.character);
      setValue("status.3", fiction?.fictionStat.verisimilitude);
      setValue("status.4", fiction?.fictionStat.synopsisComposition);
      setValue("status.5", fiction?.fictionStat.value);
      setValue("volume", fiction?.volume || 0);
      setValue("introduction", fiction?.introduction || "");
      setValue("mediaMix", fiction?.mediaMix || "");
      setValue("isTranslated", fiction?.isTranslated || "");
      setValue("originalAuthor", fiction?.author.rawName || "");
      if (md === "") {
        setMd(fiction?.setup || "");
      }

      setValue("setup", fiction?.setup || "");
      // Keywords, mcKeywords, subKeywords
      fiction?.keywords
        .filter(
          (item: any) =>
            item.keyword.isOfHeroine === false &&
            item.keyword.isOfMC === false &&
            item.keyword.isOfCons === false
        )
        .map((item: any, i: number) =>
          setValue(`keywords.${i}`, item.keyword.name)
        );
      fiction?.keywords
        .filter((item: any) => item.keyword.isOfMC === true)
        .map((item: any, i: number) =>
          setValue(`mcKeywords.${i}`, item.keyword.name)
        );
      fiction?.keywords
        .filter((item: any) => item.keyword.isOfHeroine === true)
        .map((item: any, i: number) =>
          setValue(`subKeywords.${i}`, item.keyword.name)
        );
      fiction?.keywords
        .filter((item: any) => item.keyword.isOfCons === true)
        .map((item: any, i: number) =>
          setValue(`consKeywords.${i}`, item.keyword.name)
        );
      // setValue("keywords.0", "asd");
    }
  }, [fiction, setValue, md]);

  const onValid = async (data: EditFictionForm) => {
    if (loading) return;
    // console.log(data.thumb);
    if (data.thumb && data.thumb.length > 0) {
      await fetch(`/api/files`, {
        method: "DELETE",
        body: JSON.stringify({ imageId: fiction?.fiction?.image }),
      });
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

    if (key === "," && wKeywords[0].trim() !== "") {
      e.preventDefault();

      if (!wKeywords.slice(1).includes(wKeywords[0].trim())) {
        wKeywords[0] = wKeywords[0].trim();
        wKeywords.filter((item) => item !== " ");
        setValue("keywords", [wKeywords[0], ...wKeywords]);
      }
      resetField("keywords.0");
    }
  };

  const onKeyDown2: any = (e: any) => {
    const { key } = e;

    if (key === "," && wKeywords2[0].trim() !== "") {
      e.preventDefault();

      if (!wKeywords2.slice(1).includes(wKeywords2[0].trim())) {
        wKeywords2[0] = wKeywords2[0].trim();
        wKeywords2.filter((item) => item !== " ");
        setValue("mcKeywords", [wKeywords2[0], ...wKeywords2]);
      }

      resetField("mcKeywords.0");
    }
  };

  const onKeyDown3: any = (e: any) => {
    const { key } = e;

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

    if (key === "," && wKeywords4[0].trim() !== "") {
      e.preventDefault();

      if (!wKeywords4.slice(1).includes(wKeywords4[0].trim())) {
        wKeywords4[0] = wKeywords4[0].trim();
        wKeywords4.filter((item) => item !== " ");
        setValue("consKeywords", [wKeywords4[0], ...wKeywords4]);
      }

      resetField("consKeywords.0");
    }
  };

  if (!fiction) {
    return <div>Loading...</div>;
  }

  return (
    <FictionProvider initialData={{ fiction, mbtis, setup, similarFictions }}>
      <div>
        <form className=" " onSubmit={handleSubmit(onValid, onInvalid)}>
          <div className=" max-w-[1500px]">
            <div className=" grid grid-cols-1 sm:grid-cols-5 ">
              <div className=" col-span-2 mx-5 mt-7 h-fit overflow-hidden rounded-md border-[0.5px] border-[#BBBBBB] bg-white">
                <div className=" min-h-[330px] w-full">
                  {thumbPreview ? (
                    <label className=" relative flex h-[330px] w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500">
                      <Image
                        className=" object-cover"
                        src={thumbPreview || "/"}
                        fill
                        alt="thumbnail"
                      />
                      <input
                        {...register("thumb")}
                        className="hidden"
                        type="file"
                      />
                    </label>
                  ) : (
                    <label className="flex h-[330px] w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500">
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
                    register={register("originalTitle", { required: true })}
                    required
                    label="OriginalTitle"
                    name="originalTitle"
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
                    register={register("originalAuthor", { required: true })}
                    required={false}
                    label="OriginalAuthor"
                    name="originalAuthor"
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
                    label="Genre (,필수)"
                    name="genre"
                    type="text_detail"
                  />
                  <div className=" relative flex items-center justify-between">
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
                  <div className=" mb-10 w-full overflow-hidden rounded-md border-[0.5px] border-[#BBBBBB] bg-white pb-3">
                    <h2 className=" px-2 pt-1 font-bold">Keywords</h2>
                    <input
                      className=" w-full"
                      {...register("keywords.0")}
                      type="text"
                      placeholder=" 키워드(,를 눌러서 입력하세요)"
                      onKeyDown={onKeyDown}
                    ></input>
                    <ul className=" grid grid-cols-4 px-3 pt-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-5">
                      {wKeywords
                        ?.filter((item) => item !== undefined)
                        .map((item, index) => (
                          <li
                            className=" m-1 h-fit rounded-md bg-[#3D414D] text-center text-sm text-white ring-offset-1 hover:cursor-pointer"
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
                  <div className="  mb-10 w-full overflow-hidden rounded-md border-[0.5px] border-[#BBBBBB] bg-white pb-3">
                    <h2 className=" px-2 pt-1 font-bold">Mc Keywords</h2>
                    <input
                      className=" w-full"
                      {...register("mcKeywords.0")}
                      type="text"
                      placeholder=" 키워드(,를 눌러서 입력하세요)"
                      onKeyDown={onKeyDown2}
                    ></input>
                    <ul className=" grid grid-cols-4 px-3 pt-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-5">
                      {wKeywords2
                        ?.filter((item) => item !== undefined)
                        .map((item, index) => (
                          <li
                            className=" m-1 h-fit rounded-md bg-[#3D414D] text-center text-sm text-white ring-offset-1 hover:cursor-pointer"
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
                  <div className=" mb-10 w-full overflow-hidden rounded-md border-[0.5px] border-[#BBBBBB] bg-white pb-3">
                    <h2 className=" px-2 pt-1 font-bold">Sub Keywords</h2>
                    <input
                      className=" w-full"
                      {...register("subKeywords.0")}
                      type="text"
                      placeholder=" 키워드(,를 눌러서 입력하세요)"
                      onKeyDown={onKeyDown3}
                    ></input>
                    <ul className=" grid grid-cols-4 px-3 pt-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-5">
                      {wKeywords3
                        ?.filter((item) => item !== undefined)
                        .map((item, index) => (
                          <li
                            className=" m-1 h-fit rounded-md bg-[#3D414D] text-center text-sm text-white ring-offset-1 hover:cursor-pointer"
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
                  <div className=" mb-10 w-full overflow-hidden rounded-md border-[0.5px] border-[#BBBBBB] bg-white pb-3">
                    <h2 className=" px-2 pt-1 font-bold">Cons Keywords</h2>
                    <input
                      className=" w-full"
                      {...register("consKeywords.0")}
                      type="text"
                      placeholder=" 키워드(,를 눌러서 입력하세요)"
                      onKeyDown={onKeyDown4}
                    ></input>
                    <ul className=" grid grid-cols-4 px-3 pt-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-5">
                      {wKeywords4
                        ?.filter((item) => item !== undefined)
                        .map((item, index) => (
                          <li
                            className=" m-1 h-fit rounded-md bg-[#3D414D] text-center text-sm text-white ring-offset-1 hover:cursor-pointer"
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

                  <div className=" mb-10 h-max w-full overflow-x-auto rounded-md border-[0.5px] border-[#BBBBBB] bg-white">
                    <h2 className=" px-2 pt-1 font-bold">graphs and charts</h2>
                    <FictionRadarChart />
                    <div className=" mx-2 grid grid-cols-2">
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
            <div className=" mx-5 my-7 overflow-hidden rounded-md border-[0.5px] border-[#BBBBBB] bg-white p-3">
              <Textarea
                register={register("synopsis")}
                name="synopsis"
                label="Synopsis"
                required
              />
              <Textarea
                register={register("introduction")}
                name="introduction"
                label="Introduction"
                required
              />
              <Textarea
                register={register("characters")}
                name="characters"
                label="Characters"
                required
              />
              <MDEditor height={700} value={md} onChange={handleChange} />
            </div>
          </div>
          <Button text={loading ? "Loading..." : "저장"} />
        </form>
      </div>
    </FictionProvider>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const fictionId = ctx?.params?.id;
  if (!fictionId) {
    return {
      props: {},
    };
  }

  const fiction = await client.fiction.findUnique({
    where: {
      id: +fictionId ?? 1,
    },
    include: {
      fictionStat: true,
      userFictionStat: {
        include: {
          userRationOnFictions: true,
          _count: {
            select: {
              userRationOnFictions: true,
            },
          },
        },
      },
      keywords: {
        include: {
          keyword: {
            select: {
              name: true,
              isOfHeroine: true,
              isOfMC: true,
              isOfCons: true,
            },
          },
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
      author: true,
      comments: {
        include: {
          createdBy: {
            select: {
              nickname: true,
            },
          },
        },
      },
    },
  });

  const mdHtml = await remark()
    .use(html)
    .use(remarkToc)
    .use(remarkGfm)
    .process(fiction?.setup || "");

  const arr: any[] = [];
  fiction?.keywords.map((item) => arr.push(item?.keyword?.name));
  const keywordSame = arr.map((word) => ({
    keywords: {
      some: {
        keyword: {
          name: {
            equals: word,
          },
        },
      },
    },
  }));

  const arr2: any[] = [];
  const similarFictions = await client.fiction.findMany({
    where: {
      OR: keywordSame,
      AND: {
        id: {
          not: fiction?.id,
        },
      },
    },
    select: {
      id: true,
      title: true,
      // setup: true,
    },
  });

  similarFictions.map((item) => arr2.push([item.id, item.title]));

  const isLiked = false;

  const groupedByMBTI = await client.$queryRaw`
  SELECT User.mbti,
  CAST(SUM(UserRationOnFiction.originality
  + UserRationOnFiction.synopsisComposition +
  UserRationOnFiction.value +
  UserRationOnFiction.writing +
  UserRationOnFiction.character +
  UserRationOnFiction.verisimilitude)
  / (COUNT(*)*6)
  AS CHAR(32)) AS avg,
  CAST(COUNT(*) AS CHAR(32)) AS cnt
  FROM UserRationOnFiction
  JOIN User ON UserRationOnFiction.userId = User.id
  JOIN UserFictionStat ON UserRationOnFiction.userFictionStatId = UserFictionStat.id
  WHERE UserFictionStat.fictionId = ${fictionId}
  GROUP by User.mbti
  `;

  const mbtis = groupedByMBTI;

  return {
    props: {
      fiction: JSON.parse(JSON.stringify(fiction)),
      similarFictions: JSON.parse(JSON.stringify(similarFictions)),
      isLiked,
      mbtis: JSON.parse(JSON.stringify(mbtis)),
      setup: String(mdHtml),
    },
    revalidate: 60 * 60 * 24 * 30,
  };
};

export default EditFiction;
