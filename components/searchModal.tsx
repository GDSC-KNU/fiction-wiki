import React from "react";
import SearchAutoComplete from "@components/searchAutoComplete";
import Input from "@components/input";
import { FieldErrors, useForm } from "react-hook-form";
import SearchIcon from "../public/svg/searchIcon.svg";

interface EnterForm {
  searchInput?: string;
}

export default function SearchModal() {
  const [showModal, setShowModal] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    watch,
    formState: { errors },
    setValue,
  } = useForm<EnterForm>({ mode: "onBlur" });
  const onValid = (validForm: EnterForm) => {
    // if (loading) return;
    // enter(validForm, "POST");
    console.log(validForm);
    setShowModal(false);
  };

  const onInvalid = () => {
    console.log("invalid");
  };

  console.log(watch().searchInput);

  return (
    <>
      <SearchIcon
        width="24"
        height="24"
        fill="black"
        onClick={() => setShowModal(true)}
        className=" mx-4 cursor-pointer "
      />
      {showModal ? (
        <>
          <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-20 outline-none focus:outline-none ">
            <div className="relative w-full backdrop-blur-sm mt-[48px] ">
              <div className=" px-2 border-0 shadow-lg relative flex justify-between w-full bg-white outline-none focus:outline-none">
                <form
                  className=" w-full"
                  onSubmit={handleSubmit(onValid, onInvalid)}
                >
                  <Input
                    register={register("searchInput", { required: true })}
                    required
                    label=""
                    name="searchInput"
                    type="text_detail"
                    kind="search"
                  />
                </form>
                <button
                  className="text-red-500 background-transparent uppercase text-2xl outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-40 mt-[48px] fixed inset-0 z-10 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
