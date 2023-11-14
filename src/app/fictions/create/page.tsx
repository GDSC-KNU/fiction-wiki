"use client";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import Button from "@components/common/Button";
// import FictionRadarChart from "@components/fiction/FictionRadarChart";
import Input from "@components/common/Input";
import Input2 from "@components/common/Input2";
import useMutation from "@libs/client/useMutation";

import { useRouter } from "next/navigation";
import React, { Suspense, lazy, useEffect, useState } from "react";
import Image from "next/image";

import { FormProvider, useForm } from "react-hook-form";

import DropdownSearchCheckbox from "@components/common/DropdownSearchCheckbox";
import KeywordsInputBox from "@components/common/KeywordsInputBox";
import Select from "@components/common/Select";
import WikiDetailFormModal from "@components/fiction/WikiDetailFormModal";

import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";
import useUser from "@libs/client/useUser";

import UseCreateFictionForms from "@/hooks/forms/useFictionForms";

import {
  typeOptions,
  categoryOptions,
  nationalityOptions,
  currentStateOptions,
  platformOptions,
  mediaMixOptions,
  isTranslatedOptions,
} from "@/constants/options";

import { CreateFictionMutation, CreateFictionForm } from "@/type/fiction";
import ClipLoader from "react-spinners/ClipLoader";

const MDEditor = lazy(() => import("@uiw/react-md-editor"));

const Create = () => {
  const [localLoading, setLocalLoading] = useState(false);
  const [md, setMd] = useState<string | undefined>(
    "## 줄거리\n## 개요\n## 등장인물\n### (주인공)\n### 주요인물\n#### (주요인물 1)"
  );

  const { isAdmin } = useUser();
  const router = useRouter();

  const handleChange = (md: any) => {
    setMd(md);
  };

  const [createFiction, { loading, data, error }] =
    useMutation<CreateFictionMutation>("/api/fictions");

  const methods = useForm<CreateFictionForm>({
    mode: "onChange",
    // criteriaMode: "all",
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
    watch,
    setValue,
    trigger,
    getValues,
  } = methods;

  const onValid = async (inputData: CreateFictionForm) => {
    if (loading) return;
    setLocalLoading(true);

    if (
      inputData.image &&
      inputData.image.length > 0 &&
      inputData.image[0] instanceof File
    ) {
      const { uploadURL } = await (
        await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/files`)
      ).json();
      const form = new FormData();
      form.append("file", inputData.image[0], inputData.title);

      const {
        result: { id },
      } = await (await fetch(uploadURL, { method: "POST", body: form })).json();

      /// 성공

      if (id) {
        const response = JSON.parse(
          await createFiction({ ...inputData, image: id, setup: md }, "POST")
        );

        router.push(`/fictions/${response.fiction.id}`);

        setLocalLoading(false);
      }
    }
    return;
  };

  const [thumbPreview, setThumbPreview] = useState("");

  const uploadedImage = watch("image");
  useEffect(() => {
    if (uploadedImage && uploadedImage[0] && uploadedImage[0] instanceof File) {
      const file = uploadedImage[0];
      const objectUrl = URL.createObjectURL(file);
      setThumbPreview(objectUrl);

      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    }
  }, [uploadedImage, getValues]);

  const onInvalid = () => {
    if (loading) return;
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const {
    title,
    originalTitle,
    author,
    originalAuthor,
    volume,
    type,
    nationality,
    categories,
    platforms,
    mediaMix,
    // image,
    original,
    currentState,
    isTranslated,
    dateStart,
    dateEnd,
  } = UseCreateFictionForms({
    control: methods.control,
  });

  type ErrorMessage = {
    type: string;
    message: string;
  };

  const extractErrorMessages = (obj: any) => {
    const messages = [] as ErrorMessage[];
    Object.entries(obj).forEach(([type, errors]) => {
      if (Array.isArray(errors)) {
        const root = (errors as any)?.root;
        const { type = "", message = "" } = root || errors[0];
        messages.push({ type, message });
      } else {
        const { type, message } = errors as { type: string; message: string };
        messages.push({ type, message });
      }
    });
    return messages;
  };

  return (
    <FormProvider {...methods}>
      <div className=" px-5 pt-7">
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
          <div>
            <Input2
              errors={errors}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                }
              }}
              {...title}
            />
            <div className=" my-4 w-full grid-cols-10 lg:grid">
              <div
                id="main_container"
                className=" col-span-8 mb-4 overflow-hidden bg-white lg:pr-5"
              >
                <Suspense
                  fallback={
                    <div className=" flex h-full items-center justify-center">
                      <ClipLoader
                        size={100}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    </div>
                  }
                >
                  <div className=" rounded-md border-[0.5px] border-[#BBBBBB] lg:mb-0">
                    <MDEditor
                      height="70vh"
                      value={md}
                      onChange={handleChange}
                    />
                  </div>
                </Suspense>
              </div>
              <div id="side_container" className=" col-span-2 lg:ml-0 ">
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
                    className=" mb-4 cursor-pointer whitespace-nowrap rounded border border-gray-300 px-4 py-2 font-bold hover:bg-[#EDF2F7]"
                    onClick={handleOpen}
                  >
                    작품 세부정보 수정
                  </div>
                  <WikiDetailFormModal isOpen={isOpen} onClose={handleClose}>
                    <div className=" ">
                      <div className=" ">
                        <Input2
                          errors={errors}
                          {...originalTitle}
                          label="제목(원제) *"
                        />
                        <KeywordsInputBox
                          name="relatedTitle"
                          label="제목 연관어"
                        />
                        <Input2
                          errors={errors}
                          {...author}
                          label="작가 이름(한글) *"
                        />
                        <Input2
                          errors={errors}
                          {...originalAuthor}
                          label="작가 이름(원어) *"
                        />
                        <KeywordsInputBox
                          name="relatedAuthor"
                          label="작가 이름 연관어"
                        />
                        <Select
                          {...type}
                          errors={errors}
                          options={typeOptions}
                          label="타입 *"
                        />
                        <Select
                          {...nationality}
                          errors={errors}
                          options={nationalityOptions}
                          label="국적 *"
                        />
                        <DropdownSearchCheckbox
                          {...categories}
                          name="categories"
                          errors={errors}
                          label="카테고리 *"
                          options={categoryOptions}
                          selected={getValues("categories")}
                        />
                        <div className=" relative flex items-center justify-between">
                          <div className=" w-[48%]">
                            <Input2
                              {...dateStart.field}
                              errors={errors}
                              label="연재 시작일 *"
                              type="date"
                            />
                          </div>
                          <div className=" w-[48%]">
                            <Input2
                              {...dateEnd.field}
                              errors={errors}
                              label="연재 종료일"
                              type="date"
                            />
                          </div>
                        </div>
                        <Input2
                          errors={errors}
                          {...original}
                          label="오리지널 링크 *"
                        />
                        <DropdownSearchCheckbox
                          {...platforms}
                          name={"platforms"}
                          errors={errors}
                          label="플랫폼 *"
                          options={platformOptions}
                          selected={watch("platforms")}
                        ></DropdownSearchCheckbox>
                        <Select
                          {...currentState}
                          errors={errors}
                          options={currentStateOptions}
                          label="연재상태 *"
                        />
                        <Input2 errors={errors} {...volume} label="분량 *" />
                        <DropdownSearchCheckbox
                          {...mediaMix}
                          name={"mediaMix"}
                          errors={errors}
                          label="미디어믹스"
                          options={mediaMixOptions}
                          selected={getValues("mediaMix")}
                        />
                        <Select
                          {...isTranslated}
                          errors={errors}
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
                  <div className=" h-max w-full overflow-x-auto rounded-md border-[0.5px] border-gray-300 bg-white">
                    {/* <FictionRadarChart /> */}
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
          <div className=" flex flex-col ">
            <Button disabled={loading} text={loading ? "로딩 중..." : "저장"} />
            {errors && (
              <div>
                {extractErrorMessages(errors).map(({ type, message }) => (
                  <div
                    className=" p-1 text-xs text-red-600"
                    key={`${type}-${message}`}
                  >
                    {message}
                  </div>
                ))}
              </div>
            )}
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default Create;
