import React, { useEffect } from "react";
import useMutation from "@libs/client/useMutation";
import { Fiction } from "@prisma/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Input from "@components/input";
import { useSWRConfig } from "swr";
// import { validateRequest } from "twilio/lib/webhooks/webhooks";
import { useSession } from "next-auth/react";
import { useRef } from "react";

interface RateUserStatForm {
  UserFictionStat: number[];
  comment: string;
}

export default function UserStat() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { mutate: unboundMutate } = useSWRConfig();
  const [rateUserStat, { loading, data, error }] =
    useMutation<RateUserStatMutation>(
      `/api/fictions/${router.query.id}/userRate`
    );
  const { mutate } = useSWRConfig();

  interface RateUserStatMutation {
    ok: boolean;
    fiction: Fiction;
  }

  // Useform
  const { register, handleSubmit, watch } = useForm<RateUserStatForm>({
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
  const onRateClick = (data: RateUserStatForm) => {
    console.log(session);
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
      alert("Please log in");
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

    console.log(error);
    btnOnOff();
  };

  useEffect(() => {
    // rateUserStat(data, "POST");

    mutate('')
    mutate(`/api/fictions/${router.query.id}/comment?page=${1}`);
    mutate(`/api/fictions/${router.query.id}`);

    console.log(data, error);
  }, [data, error]);

  return (
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
  );
}
