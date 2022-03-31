import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface CreateForm {
  title: string;
  author: string;
  date: number;
  nationality: string;
  status: string;
  synopsis: string;
  characters: string;
}

const create: NextPage = () => {
  const { register, handleSubmit, reset, watch } = useForm<CreateForm>();

  const onValid = () => {
    console.log("im valid bby");
  };
  console.log(watch());

  return (
    <>
      <div>
        <div className=" text-3xl mb-24">create 페이지입니다</div>
      </div>
      <form onSubmit={handleSubmit(onValid)}>
        <div>
          제목
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="제목"
          ></input>
        </div>
        <div>
          작가
          <input
            {...register("author", { required: true })}
            type="text"
            placeholder="작가"
          ></input>
        </div>
        <br />
        <div>
          <div>줄거리</div>
          <input
            {...register("synopsis", { required: true })}
            type="text"
            placeholder="줄거리"
          ></input>
        </div>
        <div>
          <div>등장인물</div>
          <input
            {...register("characters", { required: false })}
            type="text"
            placeholder="등장인물"
          ></input>
        </div>
        <button type="submit">저장</button>
      </form>
    </>
  );
};

export default create;
