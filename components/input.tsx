import type { UseFormRegisterReturn } from "react-hook-form";

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
            className="rounded-md re
        lative flex  items-center shadow-sm"
          >
            <input
              id={name}
              required={required}
              {...register}
              type={type}
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400"
            />
          </div>
        </>
      ) : null}
      {kind === "search" ? (
        <>
          <div
            className="  my-12 mb-8  rounded-3xl re
        lative flex  items-center"
          >
            <input
              placeholder="검색어를 입력하세요"
              id={name}
              required={required}
              {...register}
              type={type}
              className="rounded-3xl appearance-none w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400"
            />
            <svg
              className=" relative right-9 "
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                fill="black"
              ></path>{" "}
            </svg>
          </div>
        </>
      ) : null}
      {kind === "comment" ? (
        <>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor={name}
          ></label>
          <div
            className="rounded-md re
        lative flex  items-center shadow-sm"
          >
            <input
              id={name}
              required={required}
              {...register}
              type={type}
              placeholder="한줄평을 입력해주세요. 과도한 비방, 욕설, 도배는 차단됩니다."
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400"
            />
          </div>
        </>
      ) : null}
      {kind === "text_detail" ? (
        <div className="rounded-md relative flex  items-center shadow-sm">
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400"
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
            className="rounded-md re
        lative flex  items-center shadow-sm"
          >
            <input
              id={name}
              required={required}
              {...register}
              type={type}
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400"
            />
          </div>
        </>
      ) : null}
      {kind === "status" ? (
        <div className="rounded-md relative flex  items-center">
          <span className=" w-2/4 pb-1 text-xs text-center">{label}</span>
          <input
            id={name}
            placeholder={label}
            {...register}
            type={type}
            min="0"
            max="5"
            className="appearance-none w-2/4 px-3 py-1 border text-xs border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400"
          />
        </div>
      ) : null}
      {kind === "price" ? (
        <div className="rounded-md relative flex  items-center shadow-sm">
          <div className="absolute left-0 pointer-events-none pl-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400"
          />
          <div className="absolute right-0 pointer-events-none pr-3 flex items-center">
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
            <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
              +82
            </span>
            <input
              id={name}
              required={required}
              {...register}
              type={type}
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </>
      ) : null}
    </div>
  );
}
