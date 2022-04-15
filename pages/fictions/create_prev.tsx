import FictionRadarChart from "@components/FictionRadarChart";
import useMutation from "@libs/client2/useMutation";
import type { NextPage } from "next";
import React, {
  KeyboardEvent,
  KeyboardEventHandler,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface CreateForm {
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
  const [create, { loading, data, error }] = useMutation(
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
  } = useForm<CreateForm>({ mode: "onBlur" });

  const onValid = (data: CreateForm) => {
    console.log(data);
    create(data);
  };
  const onInvalid = (erros: FieldErrors) => {};

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
                <img
                  className=" min-h-[330px] w-full"
                  src="https://picsum.photos/462/599?random=1"
                ></img>
                <div className=" px-4 py-3">
                  <input
                    className={`${
                      Boolean(errors.title?.message)
                        ? " w-full mb-2 border-red-400 border-2"
                        : " w-full mb-2"
                    }`}
                    {...register("title", {
                      required: "Title is required",
                      minLength: {
                        message: "The title should be longer than 2",
                        value: 2,
                      },
                      validate: {
                        notGmail: (value) =>
                          !value.includes("@gmail.com") ||
                          "Gmail is not allowed",
                      },
                    })}
                    type="text"
                    placeholder="제목"
                  ></input>
                  <span className=" text-sm">{errors.title?.message}</span>
                  <input
                    className=" w-full mb-2"
                    {...register("author")}
                    type="text"
                    placeholder="작가"
                  ></input>
                  <div className=" mb-2">
                    <input
                      className=" w-full mb-2"
                      {...register("nationality")}
                      type="text"
                      placeholder="국가"
                    ></input>
                  </div>
                  <div className=" mb-2">
                    <input
                      className=" w-full mb-2"
                      {...register("genre")}
                      type="text"
                      placeholder="장르"
                    ></input>
                  </div>
                  <div className=" mb-2">
                    <input {...register("date.0")} type="date"></input>~
                    <input {...register("date.1")} type="date"></input>
                  </div>
                  <div className=" mb-2">
                    <input
                      className=" w-full mb-2"
                      {...register("original")}
                      type="text"
                      placeholder="원본"
                    ></input>
                  </div>
                  <div className="">
                    <input
                      className=" w-full mb-2"
                      {...register("platforms.0")}
                      type="text"
                      placeholder="플랫폼"
                    ></input>
                  </div>
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
                    <div className=" grid grid-cols-5">
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
              <div className=" ">
                <h2 className=" font-bold text-xl">줄거리</h2>
                <textarea
                  className=" w-full h-40 border-2"
                  {...register("synopsis", { required: true })}
                  placeholder="줄거리"
                ></textarea>
              </div>
              <div className=" mt-3">
                <h3 className=" font-bold text-xl">등장인물</h3>
                <textarea
                  className=" w-full min-h-[150px] border-2"
                  {...register("characters", { required: false })}
                  placeholder="등장인물"
                ></textarea>
              </div>
            </div>
          </div>
          <button className=" w-full bg-blue-200" type="submit">
            저장
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
