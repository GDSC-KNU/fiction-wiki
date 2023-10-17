import * as React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { cn } from "@libs/util";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  register: UseFormRegisterReturn;
}

const TextArea2 = ({ label, className, register, ...props }: TextareaProps) => {
  return (
    <React.Fragment>
      {label ? (
        <label
          htmlFor={label}
          className="mb-1 block text-sm font-bold text-gray-700"
        >
          {label}
        </label>
      ) : null}
      <textarea
        rows={4}
        className={cn(
          "flex h-20 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
          className
        )}
        {...register}
        {...props}
      />
    </React.Fragment>
  );
};

TextArea2.displayName = "Textarea";

export { TextArea2 };
