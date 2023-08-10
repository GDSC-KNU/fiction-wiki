import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

interface KeywordInputProps {
  name: string;
  label: string;
}

const KeywordsInputBox: React.FC<KeywordInputProps> = ({ name, label }) => {
  const { register, watch, setValue } = useFormContext();
  const initialKeywords = watch(name) as string[];
  const [inputValue, setInputValue] = useState("");
  const [keywords, setKeywords] = useState<string[]>(initialKeywords || []);

  const addKeyword = () => {
    const keywordToAdd = inputValue.trim();
    if (keywordToAdd !== "" && !keywords.includes(keywordToAdd)) {
      setKeywords([keywordToAdd, ...keywords]);
      setInputValue("");
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    setKeywords(keywords.filter((keyword) => keyword !== keywordToRemove));
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ENTER") {
      e.preventDefault();
      addKeyword();
    }
  };

  // update form value when keywords state changes
  useEffect(() => {
    setValue(name, keywords);
  }, [keywords, setValue, name]);

  return (
    <div className="mb-2">
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className=" flex">
        <input
          id={name}
          className=" mr-3 w-full rounded-md border border-gray-300 px-3 py-2 text-start text-sm font-medium text-gray-900 hover:border-blue-400 focus:outline-none focus:ring-blue-400"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder={`추가할 ${label}를 입력하세요`}
          onKeyDown={onKeyDown}
        />
        <button
          onClick={addKeyword}
          className=" whitespace-nowrap rounded-md bg-blue-500 px-3 py-2 text-sm text-white"
        >
          추가
        </button>
      </div>
      <ul className=" w-full rounded-md  bg-white pt-3 dark:bg-gray-700 ">
        {keywords.map((item, index) => (
          <li
            className=" mr-1 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
            key={index}
          >
            {item}
            <button
              className="ml-1 text-xs text-red-500 focus:outline-none"
              onClick={() => removeKeyword(item)}
            >
              &#x2715;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeywordsInputBox;
