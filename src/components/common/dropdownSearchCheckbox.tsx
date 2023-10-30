"use client";

import React, { useState, useEffect } from "react";
import { ErrorMessage } from "@hookform/error-message";

import { useForm, type FieldErrors } from "react-hook-form";
import { EditFictionForm } from "@/type/fiction";

interface Option {
  value: string;
  label: string;
}

export interface DropdownCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  options: Option[];
  selected: any[] | undefined;
  append: any;
  remove: any;
  fields: any;
  errors: FieldErrors<EditFictionForm>;
  // errors?: FieldErrors<EditFictionForm>;
}

// interface DropdownCheckboxProps {
//   label: string;
//   options: Option[];
//   register: any;
//   selected: any;
//   // append: any;
//   // remove: any;
//   // fields: any;
//   // categories: any;
// }

const DropdownCheckbox: React.FC<DropdownCheckboxProps> = ({
  label,
  options,
  selected = [],
  errors,
  append,
  remove,
  fields,
  name = "",
  ...props
}) => {
  // const {
  //   formState: { errors },
  // } = useForm();
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log("errors", errors, name);
  return (
    <div className=" mb-2">
      <label
        htmlFor="dropdown-checkbox-with-search"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <button
        id="dropdown-checkbox-with-search"
        onClick={() => setIsOpen(!isOpen)}
        className=" w-full rounded-md border border-gray-300 px-3 py-2 text-start text-sm font-medium text-gray-900 hover:border-blue-400 focus:outline-none focus:ring-blue-400"
        type="button"
      >
        {selected.length === 0
          ? `--선택--`
          : selected.map((item: any, index: number) => (
              <span
                key={index}
                className=" mr-1 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
              >
                {item.value}
              </span>
            ))}
      </button>

      {isOpen && (
        <div className="mt-2 w-full rounded-md border border-gray-300 bg-white shadow-sm dark:bg-gray-700">
          <div className="p-3">
            <div className="relative">
              <input
                autoFocus
                type="text"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-blue-400"
                placeholder={`${label} 검색`}
                value={searchValue}
                onChange={(e) => {
                  // setSearchValue(e.target.value);
                  append(e.target.value);
                }}
              />
            </div>
          </div>

          <ul className="h-48 overflow-y-auto px-3 pb-3 text-sm text-gray-700 dark:text-gray-200">
            {filteredOptions.map((option, index) => (
              <li key={option.value}>
                <div className="flex items-center rounded pl-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id={`checkbox-item-${option.value}`}
                    type="checkbox"
                    value={option.value}
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                    checked={selected.some(
                      (item: any) => item.value === option.value
                    )}
                    onChange={(e) => {
                      const removeIndex = fields.findIndex(
                        (field: any) => field.value === e.target.value
                      );

                      if (e.target.checked) {
                        if (removeIndex === -1) {
                          append({ value: e.target.value });
                        }
                      } else {
                        if (removeIndex !== -1) {
                          remove(removeIndex);
                        }
                      }
                    }}
                  />

                  <label
                    htmlFor={`checkbox-item-${option.value}`}
                    className="ml-2 w-full rounded py-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {option.label}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ErrorMessage
        errors={errors}
        name={`${name}.root`}
        render={({ message }) => {
          return <p className=" p-1 text-xs text-red-600">{message}</p>;
        }}
      />
    </div>
  );
};

export default DropdownCheckbox;
