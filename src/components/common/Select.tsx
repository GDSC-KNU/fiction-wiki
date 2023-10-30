import * as React from "react";
import { ErrorMessage } from "@hookform/error-message";

import type { FieldErrors } from "react-hook-form";
import { EditFictionForm } from "@/type/fiction";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { label: string; value: string | null }[];
  errors?: FieldErrors<EditFictionForm>;
  register?: any;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, register, label, errors, options, ...props }, ref) => {
    return (
      <div className="mb-2 flex flex-col">
        <label
          htmlFor="select-box"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <select
          id="select-box"
          ref={ref}
          {...props}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-blue-400"
        >
          <option value="null">{`--선택--`}</option>
          {options.map((option: any) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ErrorMessage
          errors={errors}
          name={props.name || ""}
          render={({ message }) => (
            <p className=" p-1 text-xs text-red-600">{message}</p>
          )}
        />
      </div>
    );
  }
);
Select.displayName = "Select";

export default Select;
