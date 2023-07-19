import React, { useState, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface DropdownCheckboxProps {
  options: Option[];
  register: any;
  selected: any;
  append: any;
  remove: any;
  fields: any;
}

const DropdownCheckbox: React.FC<DropdownCheckboxProps> = ({
  options,
  register,
  selected,
  append,
  remove,
  fields,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className=" mb-2">
      <label
        htmlFor="dropdown-checkbox-with-search"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        카테고리
      </label>
      <button
        id="dropdown-checkbox-with-search"
        onClick={() => setIsOpen(!isOpen)}
        className=" w-full rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-900 hover:border-blue-400 focus:outline-none focus:ring-blue-400"
        type="button"
      >
        {selected.map((item: any) => item.value).join(", ")}
      </button>

      {isOpen && (
        <div className="mt-2 w-full rounded-md border border-gray-300 bg-white shadow-sm dark:bg-gray-700">
          <div className="p-3">
            <div className="relative">
              <input
                autoFocus
                type="text"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-blue-400"
                placeholder="카테고리 검색"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
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
                      if (e.target.checked) {
                        append({ value: e.target.value });
                        const removeIndex = fields.findIndex(
                          (field: any) => field.value === e.target.value
                        );
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
    </div>
  );
};

export default DropdownCheckbox;
