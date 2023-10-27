"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FieldErrors, FormProvider, useForm } from "react-hook-form";

import Button from "@components/common/button";
import Input from "@components/common/input";
import Input2 from "@components/common/input2";
import FictionRadarChart from "@components/fiction/fictionRadarChart";
import useMutation from "@libs/client/useMutation";
import DropdownSearchCheckbox from "@components/common/dropdownSearchCheckbox";
import KeywordsInputBox from "@components/common/keywordsInputBox";
import Select from "@components/common/select";
import WikiDetailFormModal from "@components/fiction/wikiDetailFormModal";
import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";

import {
  typeOptions,
  categoryOptions,
  nationalityOptions,
  currentStateOptions,
  platformOptions,
  mediaMixOptions,
  isTranslatedOptions,
} from "@/constants/options";

import useUser from "@libs/client/useUser";
import UseEditFictionForms from "@/hooks/useEditFictionForms";
import useProcessedFiction from "@/hooks/useFictionProcessed";

import {
  EditFictionForm,
  EditFictionMutation,
  FictionResponse,
} from "@/type/fiction";
import { useParams } from "next/navigation";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

export default function EditFictionWrapper({
  fallbackData,
}: {
  fallbackData: FictionResponse;
}) {
  const params = useParams();
  const { id: fictionId } = params;
  const fiction = useProcessedFiction({ fallbackData: fallbackData });
  const { isAdmin } = useUser();
  const [thumbPreview, setThumbPreview] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const methods = useForm<EditFictionForm>({
    mode: "onBlur",
    defaultValues: fiction!,
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    trigger,
  } = methods;
  const image = watch("image");

  const [md, setMd] = useState<string>(fiction?.setup || "");
  const handleMdChange = (newValue?: string) => {
    if (newValue !== undefined) {
      setMd(newValue);
    }
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const [editFiction, { loading, data }] = useMutation<EditFictionMutation>(
    `/api/fictions/${fictionId}`
  );

  const {
    title,
    originalTitle,
    author,
    originalAuthor,
    volume,
    categoriesFields,
    categoriesAppend,
    categoriesRemove,
    platformsFields,
    platformsAppend,
    platformsRemove,
    mediaMixFields,
    mediaMixAppend,
    mediaMixRemove,
  } = UseEditFictionForms({
    control: methods.control,
  });

  // Onvalid / OnInvalid Handler
  const onValid = async (data: EditFictionForm) => {
    if (loading) return;

    if (data.image && data.image.length > 0 && data.image[0] instanceof File) {
      await fetch(`/api/files`, {
        method: "DELETE",
        body: JSON.stringify({ imageId: fiction?.image }),
      });
      const { uploadURL } = await (await fetch(`/api/files`)).json();
      const form = new FormData();
      form.append("file", data.image[0], data.title);
      const {
        result: { id },
      } = await (await fetch(uploadURL, { method: "POST", body: form })).json();
      await editFiction({ ...data, image: id, setup: md }, "PUT");
    } else {
      await editFiction({ ...data, setup: md }, "PUT");
    }
    window.location.href = `/fictions/${fictionId}`;
    return;
  };

  const onInvalid = (errors: FieldErrors) => {
    if (loading) return;
    alert("입력값을 확인해주세요.");
    if (errors) {
      // console.log(errors);
      return;
    }
  };

  function handleSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    if (isOpen) {
      e.preventDefault();
    } else {
      handleSubmit(onValid, onInvalid)(e);
    }
  }

  useEffect(() => {
    if (image && image[0] && image[0] instanceof File) {
      const file = image[0];
      const objectUrl = URL.createObjectURL(file);
      setThumbPreview(objectUrl);

      return () => {
        URL.revokeObjectURL(objectUrl);
      };
    } else if (fiction?.image) {
      setThumbPreview(
        `https://imagedelivery.net/vZ0h3NOKMe-QsJIVyNemEg/${fiction?.image}/fiction`
      );
    }
  }, [image, fiction]);

  return (
    <FormProvider {...methods}>
      <div className="">
        <form onChange={() => trigger()} onSubmit={handleSubmitHandler}>
          <div>
            <div className=" mx-5 mt-7">
              <Input2
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                  }
                }}
                {...title}
              />
            </div>
            <div className=" my-4 w-full grid-cols-10 lg:grid">
              <div
                id="main_container"
                className=" col-span-8 mx-5 mb-4 overflow-hidden rounded-md border-[0.5px] border-[#BBBBBB] bg-white p-3 lg:mb-0"
              >
                <div>
                  <MDEditor
                    height="70vh"
                    value={md}
                    onChange={handleMdChange}
                  />
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
                    <div>
                      <div>
                        <Input2
                          {...originalTitle}
                          required
                          label="제목(원제)"
                          errors={errors}
                        />
                        <KeywordsInputBox
                          name="relatedTitle"
                          label="제목 연관어"
                        />
                        <Input2 {...author} required label="작가 이름(한글)" />
                        <Input2
                          {...originalAuthor}
                          required={true}
                          label="작가 이름(원어)"
                        />
                        <KeywordsInputBox
                          name="relatedAuthor"
                          label="작가 이름 연관어"
                        />
                        <Select
                          register={register("type", { required: true })}
                          options={typeOptions}
                          label="타입"
                        />
                        <Select
                          register={register("nationality", {
                            required: true,
                          })}
                          options={nationalityOptions}
                          label="국적"
                        />
                        <DropdownSearchCheckbox
                          label="카테고리"
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
                              register={register("date.0")}
                              required
                              label="연재 시작일"
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
                          register={register("original")}
                          required
                          label="오리지널 링크"
                          name="original"
                          type="text"
                        />
                        <DropdownSearchCheckbox
                          label="플랫폼"
                          options={platformOptions}
                          register={register("platforms")}
                          selected={watch("platforms")}
                          append={platformsAppend}
                          remove={platformsRemove}
                          fields={platformsFields}
                        ></DropdownSearchCheckbox>
                        <Select
                          register={register("currentState", {
                            required: true,
                          })}
                          options={currentStateOptions}
                          label="완결유무"
                        />
                        <Input2 {...volume} label="분량" />
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
          <div className=" flex flex-col px-4">
            <Button text={loading ? "로딩 중..." : "저장"} />
            {errors && (
              <div>
                {Object.entries(errors).map(([type, { message }]: any) => {
                  return (
                    <div className=" p-1 text-xs text-red-600" key={type}>
                      {message}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
