import Button from "@components/button";
import FictionRadarChart from "@components/FictionRadarChart";
import Input from "@components/input";
import Textarea from "@components/textarea";
import useMutation from "@libs/client/useMutation";
import type { NextPage } from "next";
import React, {
  KeyboardEvent,
  KeyboardEventHandler,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface CreateFictionForm {
  title: string;
  author: string;
  nationality: string;
  genre: string[];
  date: Date[];
  status: number[];
  synopsis: string;
  characters: string;
  tags: string[];
  original: string;
  platforms: string[];
}

const Create: NextPage = () => {
  const [createFiction, { loading, data, error }] = useMutation(
    "/api/fictions/create"
  );
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    watch,
    formState: { errors },
    setValue,
  } = useForm<CreateFictionForm>({ mode: "onBlur" });

  const onValid = (data: CreateFictionForm) => {
    if (loading) return;
    console.log(data);
    createFiction(data);
  };
  const onInvalid = (erros: FieldErrors) => {
    if (loading) return;
  };

  console.log(watch());

  const wTags: string[] = watch().tags;
  const wStatus: number[] = watch().status;

  const onKeyDown: any = (e: any) => {
    const { key } = e;
    console.log(key);

    if (key === ",") {
      e.preventDefault();

      if (!wTags.slice(1).includes(wTags[0].trim())) {
        setValue("tags", [wTags[0], ...wTags]);
      }
      resetField("tags.0");
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
                    <input className="hidden" type="file" />
                  </label>
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
                    register={register("author", { required: true })}
                    required
                    label="Author"
                    name="author"
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
                  <input {...register("date.0")} type="date"></input>~
                  <input {...register("date.1")} type="date"></input>
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
                </div>
              </div>
              <div className=" col-span-3 mx-5 mt-7">
                <div className=" grid xl:grid-cols-2 sm:grid-cols-1">
                  <div className=" mb-10 pb-3 px- w-full bg-white border-[0.5px] border-[#BBBBBB] rounded-md overflow-hidden">
                    <h2 className=" font-bold pt-1 px-2">Keywords</h2>
                    <input
                      className=" w-full"
                      {...register("tags.0")}
                      type="text"
                      placeholder=" 키워드(,를 눌러서 입력하세요)"
                      onKeyDown={onKeyDown}
                    ></input>
                    <ul className=" grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-5 pt-3 px-3">
                      {wTags
                        ?.filter((item) => item !== undefined)
                        .map((item, index) => (
                          <li
                            className=" bg-[#3D414D] text-white text-sm text-center ring-offset-1 mx-1 my-1 rounded-md h-fit"
                            key={index}
                          >
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className=" h-max bg-white mb-10 xl:ml-10 w-full border-[0.5px] border-[#BBBBBB] rounded-md overflow-x-auto">
                    <h2 className=" font-bold pt-1 px-2">graphs and charts</h2>
                    <FictionRadarChart wStatus={wStatus} />
                    <div className=" grid grid-cols-2">
                      <input
                        {...register("status.0")}
                        className=" text-xs text-center"
                        type="text"
                        placeholder="오리지널리티"
                      />
                      <input
                        {...register("status.1")}
                        className=" text-xs text-center"
                        type="text"
                        placeholder="필력"
                      />
                      <input
                        {...register("status.2")}
                        className=" text-xs text-center"
                        type="text"
                        placeholder="캐릭터성"
                      />
                      <input
                        {...register("status.3")}
                        className=" text-xs text-center"
                        type="text"
                        placeholder="핍진성"
                      />
                      <input
                        {...register("status.4")}
                        className=" text-xs text-center"
                        type="text"
                        placeholder="스토리"
                      />
                      <input
                        {...register("status.5")}
                        className=" text-xs text-center"
                        type="text"
                        placeholder="작품성"
                      />
                    </div>
                  </div>
                </div>
                {/* <div className=" h-fit w-full bg-white border-[0.5px] border-[#BBBBBB] rounded-md">
                  <h2 className=" font-bold pt-1 px-2"> Comments</h2>
                  <ul></ul>
                </div> */}
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
            </div>
          </div>
          <Button text={loading ? "Loading..." : "저장"} />
        </form>
      </div>
    </>
  );
};

export default Create;
