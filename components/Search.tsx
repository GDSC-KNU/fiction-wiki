import useSearch from "@libs/client/useSearch";
import React, { useEffect, useRef, useState } from "react";
import Input from "@components/Input";
import { FieldErrors, useForm } from "react-hook-form";
import { Fiction } from "@prisma/client";
import useSWR from "swr";
import Router from "next/router";
import { useRouter } from "next/router";

interface SearchForm {
  title?: string;
  author?: string;
}

export default function Search() {
  const [search, setSearch] = useState<string>();
  const [input, setInput] = useState("");
  const router = useRouter();

  const onValid = async (data: SearchForm) => {
    if (!data.title) return;
    router.push(`/search/title/${data.title}`);
  };

  //   const { result } = useSearch(search);

  //   if (result) console.log(result);

  const onInvalid = (erros: FieldErrors) => {
    return;
  };

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    watch,
    formState: { errors },
    setValue,
  } = useForm<SearchForm>({ mode: "onBlur" });

  //   console.log(watch());

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      {/* <input
        value={input}
        onChange={handleInputChange}
        placeholder="검색어를 입력하세요"
      /> */}
      <Input
        register={register("title", {
          //   pattern: /^[0-9]*$/,
        })}
        required
        label=""
        name="title"
        type="text"
        kind="search"
      />
    </form>
  );
}
