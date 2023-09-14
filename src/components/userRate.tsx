"use client";

import React, { useEffect, useState } from "react";
import useMutation from "@libs/client/useMutation";
import { Fiction } from "@prisma/client";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import Input from "@components/common/input";
import { useSWRConfig } from "swr";
import { useRef } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import MbtiInputModal from "@components/mbtiInputModal";
import useUser from "@libs/client/useUser";

interface RateUserStatForm {
  UserFictionStat: number[];
  comment: string;
}

export default function UserStat() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { user: session } = useUser();

  const params = useParams();
  const { id } = params;

  const [rateUserStat, { loading, data, error }] =
    useMutation<RateUserStatMutation>(`/api/fictions/${id}/userRate`);
  const { mutate } = useSWRConfig();

  interface RateUserStatMutation {
    ok: boolean;
    fiction: Fiction;
  }

  // Useform
  const { register, handleSubmit, watch, reset } = useForm<RateUserStatForm>({
    mode: "onBlur",
  });

  const [
    curOriginality,
    curWriting,
    curCharacter,
    curVerisimilitude,
    curSynopsisCompositon,
    curValue,
  ] = watch()?.UserFictionStat || [0, 0, 0, 0, 0, 0];

  function btnOnOff() {
    const target = document.getElementById(
      "rateButton"
    ) as HTMLButtonElement | null;
    target!.disabled = !target?.disabled;
  }

  const buttonFlag = useRef(true);

  const onRateClick = async (data: RateUserStatForm) => {
    if (!session) return;

    if (!buttonFlag.current) {
      alert("평가는 한번만 가능합니다.");
      return;
    }
    buttonFlag.current = !buttonFlag.current;
    setTimeout(() => {
      buttonFlag.current = !buttonFlag.current;
    }, 5000);
    btnOnOff();
    if (!session) {
      console.log(session);
      alert("로그인 해주세요");
      btnOnOff();
      return;
    }

    if (
      !curOriginality ||
      !curWriting ||
      !curCharacter ||
      !curVerisimilitude ||
      !curSynopsisCompositon ||
      !curValue
    ) {
      alert("코멘트와 평점을 입력해 주세요");
      btnOnOff();
      return;
    }

    rateUserStat(data, "POST");
    reset();
    closeDetails();
    btnOnOff();
  };

  useEffect(() => {
    mutate(`/api/fictions/${id}/comment?page=${1}`);
    mutate(`/api/fictions/${id}`);
  }, [data, error]);

  const closeDetails = () => {
    setIsOpen(false);
  };

  const handleBeforeSubmit = () => {
    if (!session) return alert("로그인 해주세요");
    if (session.mbti === null || session.sex === null) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className=" mx-auto my-2 h-fit w-full px-3">
      {loading ? (
        <div className=" flex justify-center">
          <ClipLoader
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <details open={false}>
          <summary
            onClick={handleBeforeSubmit}
            style={{ listStyle: "none" }}
            className=" my-2 cursor-pointer rounded-md border-[0.5px] border-[#BBBBBB] text-center font-bold"
          >
            평가하기
          </summary>
          <form className=" w-full" onSubmit={handleSubmit(onRateClick)}>
            <div className=" mt-3 grid grid-cols-2">
              <Input
                register={register("UserFictionStat.0", {
                  max: 5,
                  min: 0,
                  pattern: /^[0-9]*$/,
                })}
                required
                label="오리지널리티"
                name="UserFictionStat"
                type="number"
                kind="status"
              />
              <Input
                register={register("UserFictionStat.1", {
                  max: 5,
                  min: 0,
                  pattern: /^[0-9]*$/,
                })}
                required
                label="필력"
                name="UserFictionStat"
                type="number"
                kind="status"
              />
              <Input
                register={register("UserFictionStat.2", {
                  max: 5,
                  min: 0,
                  pattern: /^[0-9]*$/,
                })}
                required
                label="캐릭터성"
                name="UserFictionStat"
                type="number"
                kind="status"
              />
              <Input
                register={register("UserFictionStat.3", {
                  max: 5,
                  min: 0,
                  pattern: /^[0-9]*$/,
                })}
                required
                label="핍진성"
                name="UserFictionStat"
                type="number"
                kind="status"
              />
              <Input
                register={register("UserFictionStat.4", {
                  max: 5,
                  min: 0,
                  pattern: /^[0-9]*$/,
                })}
                required
                label="스토리"
                name="UserFictionStat"
                type="number"
                kind="status"
              />
              <Input
                register={register("UserFictionStat.5", {
                  max: 5,
                  min: 0,
                  pattern: /^[0-9]*$/,
                })}
                required
                label="작품성"
                name="UserFictionStat"
                type="number"
                kind="status"
              />
            </div>
            <Input
              register={register("comment", {
                maxLength: 40,
              })}
              required
              label="코멘트"
              name="Comment"
              type="text"
              kind="comment"
            ></Input>
            <button
              id="rateButton"
              type="submit"
              className="w-full rounded-md  border-[0.5px] border-[#BBBBBB] bg-white px-4 font-medium text-black shadow-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              등록
            </button>
          </form>
          <MbtiInputModal
            isOpen={isModalOpen}
            closeModal={() => setIsModalOpen(false)}
          />
        </details>
      )}
    </div>
  );
}
