import React from "react";
import { cls } from "@libs/client/utils";

interface ButtonProps {
  large?: boolean;
  text: string;
  [key: string]: any;
}

export default function Button({
  large = false,
  onClick,
  text,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cls(
        "w-full rounded-md  border-[0.5px] border-gray-300  bg-white px-4 font-medium text-black shadow-sm hover:border-[#BBBBBB] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        large ? "py-3 text-base" : "py-2 text-sm "
      )}
    >
      {text}
    </button>
  );
}
