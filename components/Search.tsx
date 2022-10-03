import React from "react";
// import Input from "@components/Input";
import Input from "@components/Input";
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
    router.push(`/search/title/${data.title}`);
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

  // console.log(errors);

  return (
    <div className=" ">
      <form
        className=" max-w-[581px] mx-auto"
        onSubmit={handleSubmit(onValid, onInvalid)}
      >
        {/* <input
        value={input}
        onChange={handleInputChange}
        placeholder="검색어를 입력하세요"
      /> */}
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
      </form>
    </div>
  );
}
