import React from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import SearchIcon from "../public/svg/searchIcon.svg";

interface InputProps {
  label: string;
  name: string;
  kind?:
    | "text"
    | "phone"
    | "price"
    | "text_detail"
    | "status"
    | "date"
    | "comment"
    | "search";
  type: string;
  register: UseFormRegisterReturn;
  required: boolean;
}

export default function Input({
  label,
  name,
  kind = "text",
  register,
  type,
  required,
}: InputProps) {
  return (
    <div className=" mb-2">
      {kind === "text" ? (
        <>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor={name}
          >
            {label}
          </label>
          <div
            className=" relative
        flex items-center  rounded-md shadow-sm"
          >
            <input
              id={name}
              required={required}
              {...register}
              type={type}
              className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-blue-400"
            />
          </div>
        </>
      ) : null}
      {kind === "search" ? (
        <div className=" flex items-center">
          <SearchIcon
            width="20"
            height="20"
            fill="black"
            className=" relative top-1"
          />
          <div className=" flex w-full items-center">
            <input
              autoComplete="off"
              placeholder="검색어를 입력하세요"
              id={name}
              required={required}
              {...register}
              type={type}
              className=" w-full px-3 pb-1 pt-3  text-black placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </div>
      ) : null}
      {kind === "comment" ? (
        <>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor={name}
          ></label>
          <div
            className=" relative
        flex items-center  rounded-md shadow-sm"
          >
            <input
              id={name}
              required={required}
              {...register}
              type={type}
              placeholder="한줄평을 입력해주세요. 과도한 비방, 욕설, 도배는 차단됩니다."
              className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-blue-400"
            />
          </div>
        </>
      ) : null}
      {kind === "text_detail" ? (
        <div className="relative flex items-center  rounded-md shadow-sm">
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-blue-400"
          />
        </div>
      ) : null}
      {kind === "date" ? (
        <>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor={name}
          >
            {label}
          </label>
          <div
            className=" relative
        flex items-center  rounded-md shadow-sm"
          >
            <input
              id={name}
              required={required}
              {...register}
              type={type}
              className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-blue-400"
            />
          </div>
        </>
      ) : null}
      {kind === "status" ? (
        <div className="relative flex items-center  rounded-md">
          <span className=" w-2/4 pb-1 text-center text-xs">{label}</span>
          <input
            id={name}
            placeholder={label}
            {...register}
            type={type}
            min="0"
            max="5"
            className="w-2/4 appearance-none rounded-md border border-gray-300 px-3 py-1 text-xs shadow-sm placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-blue-400"
          />
        </div>
      ) : null}
      {kind === "price" ? (
        <div className="relative flex items-center  rounded-md shadow-sm">
          <div className="pointer-events-none absolute left-0 flex items-center justify-center pl-3">
            <span className="text-sm text-gray-500">$</span>
          </div>
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 pl-7 shadow-sm placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-blue-400"
          />
          <div className="pointer-events-none absolute right-0 flex items-center pr-3">
            <span className="text-gray-500">KRW</span>
          </div>
        </div>
      ) : null}
      {kind === "phone" ? (
        <>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor={name}
          >
            {label}
          </label>
          <div className="flex rounded-md shadow-sm">
            <span className="flex select-none items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
              +82
            </span>
            <input
              id={name}
              required={required}
              {...register}
              type={type}
              className="w-full appearance-none rounded-md rounded-l-none border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            />
          </div>
        </>
      ) : null}
    </div>
  );
}
