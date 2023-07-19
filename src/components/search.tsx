import React from "react";
import Input from "@components/common/input";
import { FieldErrors, useForm } from "react-hook-form";
import { useRouter } from "next/router";

interface SearchForm {
  title?: string;
  author?: string;
}

export default function Search() {
  // const [search, setSearch] = useState<string>();
  // const [input, setInput] = useState("");
  const router = useRouter();

  const onValid = async (data: SearchForm) => {
    if (!data.title) return;
    router.push(`/search/title/${data.title}?page=1`);
  };

  //   const { result } = useSearch(search);

  //   if (result) console.log(result);

  const onInvalid = (erros: FieldErrors) => {
    alert("한글, 영어, 숫자만 입력가능합니다.");
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

  return (
    <div className=" ">
      <form
        className=" mx-auto flex max-w-[581px]"
        onSubmit={handleSubmit(onValid, onInvalid)}
      >
        <div className=" w-full">
          <Input
            register={register("title", {
              pattern: {
                value: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/,
                message: "한글,영어, 숫자만 입력할 수 있습니다.",
              },
            })}
            required
            label=""
            name="title"
            type="text"
            kind="search"
          />
        </div>
        <svg
          className=" relative right-8 mb-6 mt-[4.8rem] hover:cursor-pointer"
          onClick={handleSubmit(onValid, onInvalid)}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            fill="black"
          ></path>
        </svg>
      </form>
    </div>
  );
}
