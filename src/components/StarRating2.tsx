import React, { useState } from "react";

import { ErrorMessage } from "@hookform/error-message";
import { useFormContext, type FieldErrors } from "react-hook-form";

import StarIcon from "@public/svg/star.svg";

import { EditFictionForm } from "@/type/fiction";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: { kor: string; value: string };
  errors?: FieldErrors<EditFictionForm>;
}

const Star = ({ filled, onClick }: any) => (
  <StarIcon
    className={`h-4 w-4 ${filled ? "text-yellow-500" : "text-gray-300"} `}
  />
);

const starRating2 = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, errors, ...props }, ref) => {
    const { setValue, formState, getValues } = useFormContext();

    const handleStarClick = (e: any, index: any) => {
      setValue(`${label.value}`, index, { shouldValidate: true });
    };

    return (
      <div className="">
        <div className=" relative flex flex-col rounded-md">
          <div className="flex space-x-1 sm:pl-2 lg:pl-0">
            {/* <div>{label.kor}</div> */}
            {[1, 2, 3, 4, 5].map((index) => (
              <div
                className=" cursor-pointer"
                key={index}
                onClick={(e) => handleStarClick(e, index)}
              >
                <Star
                  key={index}
                  filled={index <= getValues(`${label.value}`)}
                />
              </div>
            ))}
          </div>
          {/* <ErrorMessage
            errors={errors}
            name={props.name || ""}
            render={({ message }) => (
              <p className=" p-1 text-xs text-red-600">{message}</p>
            )}
          /> */}
        </div>
      </div>
    );
  }
);
starRating2.displayName = "starRating2";

export default starRating2;
