"use client";

// InputModal.tsx
import Input from "@components/common/Input";
import Select from "@components/common/Select";
import useMutation from "@libs/client/useMutation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface SubmitGlossaryForm {
  chinese: string;
  korean: string;
  category: string;
  id: number;
}
export default function GlossaryInputModal({
  isOpen,
  onClose,
  text: selectedText,
  data: fictionData,
}: any) {
  const [inputValue, setInputValue] = useState("");

  const [addGlossary, { loading, data, error }] =
    useMutation<SubmitGlossaryForm>(
      `${process.env.NEXT_PUBLIC_HOST}/api/glossaries`
    );

  const methods = useForm<SubmitGlossaryForm>({
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
  //   console.log(fictionData);
  const onValid = async (data: SubmitGlossaryForm) => {
    await addGlossary({ ...data, id: fictionData.id }, "POST");
    alert("용어가 등록되었습니다.");
    onClose();
  };

  const onInvalid = () => {
    alert("용어집 등록 실패");
    console.log("invalid");
  };

  useEffect(() => {
    resetField("chinese");
    resetField("korean");
    resetField("category");
    setValue("chinese", selectedText);
  }, [selectedText]);

  if (!isOpen) return null;

  const categoryOptions = [
    { label: "", value: null },
    { label: "인명", value: "인명" },
    { label: "지명", value: "지명" },
  ];

  return (
    <div className="fixed inset-0  overflow-y-auto">
      <div className=" mt-28 flex justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
          <div
            className=" inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all  sm:w-full sm:max-w-lg sm:p-6 sm:align-middle"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="mt-3 sm:mt-5">
              {/* <div>{selectedText}</div> */}
              <Input
                register={register("chinese", {
                  required: true,
                })}
                placeholder="용어를 입력해주세요"
                required
                label="용어"
                name="title"
                type="text_detail"
                kind="text"
              />
              <Input
                register={register("korean", {
                  required: true,
                })}
                placeholder="번역 단어를 입력해주세요"
                required
                label="번역"
                name="title"
                type="text_detail"
                kind="text"
              />
            </div>
            <div className="mt-3 sm:mt-5">
              {/* <input type="text" placeholder="번역 용어"></input> */}
            </div>
            <div className="mt-3 sm:mt-5">
              <Select
                register={register("category", { required: false })}
                options={categoryOptions}
                label="카테고리"
              />
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                onClick={handleSubmit(onValid, onInvalid)}
              >
                용어집 등록
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
