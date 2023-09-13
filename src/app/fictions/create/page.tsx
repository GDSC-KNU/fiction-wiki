"use client";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import Button from "@components/common/button";
import FictionRadarChart from "@components/fiction/fictionRadarChart";
import Input from "@components/common/input";
import Textarea from "@components/common/textarea";
import useMutation from "@libs/client/useMutation";
import { Fiction } from "@prisma/client";
import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import client from "@libs/server/client";

import {
  FieldErrors,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";

import DropdownSearchCheckbox from "@components/common/dropdownSearchCheckbox";
import KeywordsInputBox from "@components/common/keywordsInputBox";
import Select from "@components/common/select";
import WikiDetailFormModal from "@components/fiction/wikiDetailFormModal";
// import { FictionProvider } from "@src/context/fictionContext";
import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";
import useUser from "@libs/client/useUser";

import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import remarkToc from "remark-toc";

interface CreateFictionForm {
  title: string;
  author: string;
  nationality: string;
  categories: { value: string }[];
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
  platforms: { value: string }[];
  image?: FileList | string;
  volume?: number;
  isTranslated?: string;
  relatedTitle?: [];
  relatedAuthor?: [];
  originalAuthor?: string;
  type?: string;
  mediaMix?: { value: string }[];
  setup?: string;
  introduction?: string;
  originalTitle?: string;
}

interface CreateFictionMutation {
  ok: boolean;
  fiction: Fiction;
}

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

const Create: NextPage = () => {
  const [md, setMd] = useState<string | undefined>(
    "## 줄거리\n## 개요\n## 등장인물\n### (주인공)\n### 주요인물\n#### (주요인물 1)"
  );

  const { isAdmin } = useUser();

  const handleChange = (md: any) => {
    setMd(md);
  };
  const router = useRouter();

  const [createFiction, { loading, data, error }] =
    useMutation<CreateFictionMutation>("/api/fictions");

  const methods = useForm<CreateFictionForm>({
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    resetField,
    watch,
    setValue,
    control,
    trigger,
    formState: { errors },
  } = methods;

  const onValid = async (data: CreateFictionForm) => {
    if (loading) return;
    // console.log(data);
    if (data.image && data.image.length > 0 && data.image[0] instanceof File) {
      const { uploadURL } = await (await fetch(`/api/files`)).json();
      const form = new FormData();
      form.append("file", data.image[0], data.title);
      const {
        result: { id },
      } = await (await fetch(uploadURL, { method: "POST", body: form })).json();
      createFiction({ ...data, image: id, setup: md }, "POST");
    }
    return;
  };

  useEffect(() => {
    if (data?.ok) {
      router.push(`/fictions/${data.fiction.id}`);
    }
  }, [data, router]);

  const [thumbPreview, setThumbPreview] = useState("");
  const image = watch("image");

  useEffect(() => {
    if (image && image[0] && image[0] instanceof File) {
      const file = image[0];
      const objectUrl = URL.createObjectURL(file);
      setThumbPreview(objectUrl);

      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    }
  }, [image]);

  const onInvalid = () => {
    if (loading) return;
    // console.log(watch());
    // console.log("errors");
    // console.log(errors);
    // alert("작품 세부사항을 포함한 필수항목을 모두 입력해주세요.");
  };

  /// watch state (react-hook-form)

  const {
    append: categoriesAppend,
    remove: categoriesRemove,
    fields: categoriesFields,
  } = useFieldArray({
    control,
    name: "categories",
  });

  const {
    append: platformsAppend,
    remove: platformsRemove,
    fields: platformsFields,
  } = useFieldArray({
    control,
    name: "platforms",
  });

  const {
    append: mediaMixAppend,
    remove: mediaMixRemove,
    fields: mediaMixFields,
  } = useFieldArray({
    control,
    name: "mediaMix",
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const typeOptions = [
    { label: "웹소설", value: "웹소설" },
    { label: "웹툰", value: "웹툰" },
  ];

  const nationalityOptions = [
    { label: "중국", value: "중국" },
    { label: "일본", value: "일본" },
    { label: "한국", value: "한국" },
    { label: "영미권", value: "영미권" },
  ];

  const categoryOptions = [
    { label: "판타지", value: "판타지" },
    { label: "선협", value: "선협" },
    { label: "무협", value: "무협" },
    { label: "SF", value: "SF" },
    { label: "퓨전", value: "퓨전" },
    { label: "현대판타지", value: "현대판타지" },
    { label: "미정", value: "미정" },
  ];

  const isTranslatedOptions = [
    { label: "", value: null },
    { label: "번역", value: "번역" },
    { label: "미번", value: "미번" },
    { label: "번역(미디어믹스)", value: "번역(미디어믹스)" },
  ];

  const currentStateOptions = [
    { label: "완결", value: "완결" },
    { label: "미완", value: "미완" },
    { label: "연재중단", value: "연재중단" },
  ];

  const platformOptions = [
    { label: "카카오페이지", value: "카카오페이지" },
    { label: "시리즈", value: "시리즈" },
    { label: "문피아", value: "문피아" },
    { label: "노벨피아", value: "노벨피아" },
    { label: "조아라", value: "조아라" },
    { label: "치디엔", value: "치디엔" },
    { label: "타파스", value: "타파스" },
    { label: "소설가가 되자", value: "소설가가 되자" },
    { label: "하멜른", value: "하멜른" },
    { label: "기타", value: "기타" },
  ];

  const mediaMixOptions = [
    { label: "웹소설", value: "웹소설" },
    { label: "만화(웹툰)", value: "만화(웹툰)" },
    { label: "애니메이션", value: "애니메이션" },
    { label: "드라마", value: "드라마" },
    { label: "영화", value: "영화" },
    { label: "오디오북", value: "오디오북" },
  ];

  const validate = (value: any) => {
    if (typeof value === "string") {
      value = value.trim();
      const isNumber = /^\d+$/;
      if (value.length === 0) return "This field is required";
    }

    return true;
  };

  return (
    <FormProvider {...methods}>
      <div className="">
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
          <div>
            <div className=" mx-5 mt-7">
              <Input
                register={register("title", {
                  required: true,
                  validate,
                })}
                placeholder="제목을 입력해주세요"
                required
                label=""
                name="title"
                type="text_detail"
                kind="text"
              />
            </div>
            <div className=" my-4 w-full grid-cols-10 lg:grid">
              <div
                id="main_container"
                className=" col-span-8 mx-5 mb-4 overflow-hidden rounded-md border-[0.5px] border-[#BBBBBB] bg-white p-3 lg:mb-0"
              >
                <div>
                  <MDEditor height="70vh" value={md} onChange={handleChange} />
                </div>
              </div>
              <div id="side_container" className=" col-span-2 mx-5 lg:ml-0 ">
                <div
                  id="thumbnail_preview"
                  className=" mb-4 min-h-[240px] w-full"
                >
                  {thumbPreview ? (
                    <label className=" relative flex h-[240px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-md border-2 border-dashed border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500">
                      <Image
                        className=" object-cover"
                        src={thumbPreview || "/"}
                        fill
                        alt="thumbnail"
                      />
                      <input
                        {...register("image")}
                        className="hidden"
                        type="file"
                      />
                    </label>
                  ) : (
                    <label className="flex h-[240px] w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500">
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
                        {...register("image")}
                        className="hidden"
                        type="file"
                      />
                    </label>
                  )}
                </div>

                <div className=" my-2 text-center ">
                  <div
                    className=" mb-4 cursor-pointer whitespace-nowrap rounded border border-[#BBBBBB] px-4 py-2 font-bold hover:bg-[#EDF2F7]"
                    onClick={handleOpen}
                  >
                    작품 세부정보 수정
                  </div>
                  <WikiDetailFormModal isOpen={isOpen} onClose={handleClose}>
                    <div className=" ">
                      <div className=" ">
                        <Input
                          register={register("originalTitle", {
                            required: true,
                            validate,
                          })}
                          required
                          label="제목(원제) *"
                          name="originalTitle"
                          type="text_detail"
                        />
                        <KeywordsInputBox
                          name="relatedTitle"
                          label="제목 연관어"
                        />
                        <Input
                          register={register("author", {
                            required: true,
                            validate,
                          })}
                          required
                          label="작가 이름(한글) *"
                          name="author"
                          type="text_detail"
                        />
                        <Input
                          register={register("originalAuthor", {
                            required: true,
                            validate,
                          })}
                          required={false}
                          label="작가 이름(원어) *"
                          name="originalAuthor"
                          type="text_detail"
                        />
                        <KeywordsInputBox
                          name="relatedAuthor"
                          label="작가 이름 연관어"
                        />
                        <Select
                          register={register("type", {
                            required: true,
                            validate,
                          })}
                          options={typeOptions}
                          label="타입 *"
                        />
                        <Select
                          register={register("nationality", {
                            required: true,
                            validate,
                          })}
                          options={nationalityOptions}
                          label="국적 *"
                        />
                        <DropdownSearchCheckbox
                          label="카테고리 *"
                          options={categoryOptions}
                          register={register}
                          selected={watch("categories")}
                          append={categoriesAppend}
                          remove={categoriesRemove}
                          fields={categoriesFields}
                        ></DropdownSearchCheckbox>
                        <div className=" relative flex items-center justify-between">
                          <div className=" w-[48%]">
                            <Input
                              register={register("date.0", {})}
                              required
                              label="연재 시작일 *"
                              name="startDate"
                              type="date"
                            />
                          </div>
                          <div className=" w-[48%]">
                            <Input
                              register={register("date.1")}
                              required
                              label="연재 종료일"
                              name="endDate"
                              type="date"
                            />
                          </div>
                        </div>
                        <Input
                          register={register("original", { required: true })}
                          required
                          label="오리지널 링크 *"
                          name="original"
                          type="text"
                        />
                        <DropdownSearchCheckbox
                          label="플랫폼 *"
                          options={platformOptions}
                          register={register("platforms", {
                            required: true,
                            validate: (value: any) =>
                              value.length !== 0 || "This field is required",
                          })}
                          selected={watch("platforms")}
                          append={platformsAppend}
                          remove={platformsRemove}
                          fields={platformsFields}
                        ></DropdownSearchCheckbox>
                        <Select
                          register={register("currentState", {
                            required: true,
                            validate,
                          })}
                          options={currentStateOptions}
                          label="연재상태 *"
                        />
                        <Input
                          register={register("volume", {
                            required: {
                              value: true,
                              message: "volume is required",
                            },
                            validate: (value) =>
                              value?.toString() !== "" ||
                              "This field is required",
                            pattern: {
                              value: /^\d+$/, // matches any sequence of one or more digits
                              message: "Only numbers are allowed",
                            },
                          })}
                          required
                          label="분량 *"
                          name="volume"
                          type="text_detail"
                        />
                        <DropdownSearchCheckbox
                          label="미디어믹스"
                          options={mediaMixOptions}
                          register={register("mediaMix")}
                          selected={watch("mediaMix")}
                          append={mediaMixAppend}
                          remove={mediaMixRemove}
                          fields={mediaMixFields}
                        />
                        <Select
                          register={register("isTranslated")}
                          options={isTranslatedOptions}
                          label="번역여부"
                        />
                      </div>
                      <KeywordsInputBox name="keywords" label="작품 키워드" />
                      <KeywordsInputBox
                        name="mcKeywords"
                        label="메인캐릭터 키워드"
                      />
                      <KeywordsInputBox
                        name="subKeywords"
                        label="히로인 키워드"
                      />
                      <KeywordsInputBox
                        name="consKeywords"
                        label="호불호 키워드"
                      />
                    </div>
                  </WikiDetailFormModal>
                </div>
                {isAdmin ? (
                  <div className=" h-max w-full overflow-x-auto rounded-md border-[0.5px] border-[#BBBBBB] bg-white">
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
                ) : null}
              </div>
            </div>
          </div>
          <div className=" px-4">
            <Button text={loading ? "Loading..." : "저장"} />
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default Create;
