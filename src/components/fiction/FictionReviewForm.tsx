"use client";

import { FormProvider, useForm } from "react-hook-form";
import { TextArea2 } from "@components/common/Textarea2";
import { Button2 } from "@components/common/Button2";
import useMutation from "@libs/client/useMutation";
import { useParams } from "next/navigation";
import useFiction from "@/hooks/useFiction";
import useUser from "@libs/client/useUser";
import useFictionReviewForm from "@/hooks/forms/useFictionReviewForms";
import { FictionResponse, UpdateUserFictionStatForm } from "@/type/fiction";
import StarRating2 from "@components/StarRating2";
import { userFictionStatOptions } from "@constants/options";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/common/Table";

export default function FictionReviewForm({
  fallbackData,
}: {
  fallbackData?: FictionResponse;
}) {
  const params = useParams();
  const { id } = params;

  const { user } = useUser();
  const { mutate } = useFiction({ fallbackData });

  const methods = useForm<UpdateUserFictionStatForm>({
    mode: "onBlur",
    defaultValues: {
      comment: "",
    },
  });

  const {
    register,
    formState: { errors },
    watch,
  } = methods;

  const { handleSubmit, resetField, reset } = methods;

  const [updateUserFictionStat, { loading, data }] = useMutation(
    `/api/fictions/${id}/review`
  );

  const onValid = async (data: UpdateUserFictionStatForm) => {
    if (!user) return alert("로그인 해주세요.");
    console.log(watch());
    await updateUserFictionStat(data, "POST");

    reset();
    mutate(`/api/fictions/${id}`);
  };

  const {
    comment,
    originality,
    verisimilitude,
    synopsisComposition,
    writing,
    character,
    value,
  } = useFictionReviewForm({
    control: methods.control,
  });

  // console.log(watch());

  return (
    <FormProvider {...methods}>
      <div className=" ">
        <form className=" w-full lg:flex" onSubmit={handleSubmit(onValid)}>
          <div className=" flex lg:block lg:pr-2">
            <Table>
              <TableBody>
                <TableRow className=" flex flex-col sm:block lg:flex lg:flex-col">
                  <TableCell className="w-[60px] font-medium">
                    {userFictionStatOptions[0].kor}
                  </TableCell>
                  <TableCell className="text-right">
                    <StarRating2
                      {...originality}
                      errors={errors}
                      label={userFictionStatOptions[0]}
                    />
                  </TableCell>
                </TableRow>
                <TableRow className=" flex flex-col sm:block lg:flex lg:flex-col">
                  <TableCell className="w-[60px] font-medium">
                    {userFictionStatOptions[1].kor}
                  </TableCell>
                  <TableCell className="text-right">
                    <StarRating2
                      {...originality}
                      errors={errors}
                      label={userFictionStatOptions[1]}
                    />
                  </TableCell>
                </TableRow>
                <TableRow className=" flex flex-col sm:block lg:flex lg:flex-col">
                  <TableCell className="w-[60px] font-medium">
                    {userFictionStatOptions[2].kor}
                  </TableCell>
                  <TableCell className="text-right">
                    <StarRating2
                      {...originality}
                      errors={errors}
                      label={userFictionStatOptions[2]}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Table>
              <TableBody>
                <TableRow className=" flex flex-col sm:block lg:flex lg:flex-col">
                  <TableCell className="w-[65px] font-medium">
                    {userFictionStatOptions[3].kor}
                  </TableCell>
                  <TableCell className="text-right">
                    <StarRating2
                      {...originality}
                      errors={errors}
                      label={userFictionStatOptions[3]}
                    />
                  </TableCell>
                </TableRow>
                <TableRow className=" flex flex-col sm:block lg:flex lg:flex-col">
                  <TableCell className="w-[65px] font-medium">
                    {userFictionStatOptions[4].kor}
                  </TableCell>
                  <TableCell className="text-right">
                    <StarRating2
                      {...originality}
                      errors={errors}
                      label={userFictionStatOptions[4]}
                    />
                  </TableCell>
                </TableRow>
                <TableRow className=" flex flex-col sm:block lg:flex lg:flex-col">
                  <TableCell className="w-[65px] font-medium">
                    {userFictionStatOptions[5].kor}
                  </TableCell>
                  <TableCell className="text-right">
                    <StarRating2
                      {...originality}
                      errors={errors}
                      label={userFictionStatOptions[5]}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="relative w-full p-2">
            <TextArea2
              className="h-full"
              {...comment}
              // label="리뷰 작성"
              placeholder={
                user
                  ? `리뷰를 작성해주세요. 과도한 비방, 욕설, 도배는 차단됩니다. 최대 500자.`
                  : "댓글작성을 위해선 로그인 해주세요."
              }
            ></TextArea2>

            <Button2
              disabled={comment.value.length === 0 || loading || !user}
              type="submit"
              size="xs"
              className="absolute bottom-4 right-4"
            >
              작성
            </Button2>
          </div>
        </form>
        {errors && (
          <div>
            {Object.entries(errors).map(([type, { message }]: any) => {
              return (
                <div
                  className=" p-1 text-xs text-red-600"
                  key={`${type}-${message}`}
                >
                  {message}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </FormProvider>
  );
}
