import * as React from "react";

import { cn } from "@libs/util";
import { ErrorMessage } from "@hookform/error-message";

import type { FieldErrors } from "react-hook-form";
import { EditFictionForm } from "@/type/fiction";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errors?: FieldErrors<EditFictionForm>;
}

const Input2 = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, errors, ...props }, ref) => {
    return (
      <div className="mb-2">
        <label
          className="mb-1 block text-sm font-medium text-gray-700"
          htmlFor={props.name}
        >
          {label}
        </label>
        <div className=" relative flex flex-col rounded-md">
          <input
            className={cn(
              "flex w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm text-sm placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
              className
            )}
            ref={ref}
            {...props}
          />
          <ErrorMessage
            errors={errors}
            name={props.name || ""}
            render={({ message }) => (
              <p className=" p-1 text-xs text-red-600">{message}</p>
            )}
          />
        </div>
      </div>
    );
  }
);
Input2.displayName = "Input2";

export default Input2;
