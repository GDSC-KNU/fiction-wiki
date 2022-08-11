import useMutation from "@libs/client/useMutation";
import { Fiction, UserRationOnFiction } from "@prisma/client";
import { useRouter } from "next/router";
import { FieldErrors, useForm } from "react-hook-form";
import Button from "./button";
import Input from "./input";
import useSWR, { useSWRConfig } from "swr";
import { validateRequest } from "twilio/lib/webhooks/webhooks";
import { useSession } from "next-auth/react";

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
  const { data: UserStatData, mutate: boundMutate } = useSWR<any>(
    router.query.id ? `/api/fictions/${router.query.id}` : null
  );

  interface RateUserStatMutation {
    ok: boolean;
    fiction: Fiction;
  }

  // Useform
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    watch,
    formState: { errors },
    setValue,
  } = useForm<RateUserStatForm>({ mode: "onBlur" });

  let [
    curOriginality,
    curWriting,
    curCharacter,
    curVerisimilitude,
    curSynopsisCompositon,
    curValue,
  ] = watch()?.UserFictionStat || [0, 0, 0, 0, 0, 0];

  let userCount = UserStatData?.fiction?.userFictionStat?._count?.users;

  function btnOnOff() {
    const target = document.getElementById(
      "rateButton"
    ) as HTMLButtonElement | null;
    target!.disabled = !target?.disabled;
  }

  //소수점 둘째자리 숫자로 변환
  const fixFloat = function (n: number) {
    let m = Number((Math.abs(n) * 100).toPrecision(15));
    return Math.round(m) / (100 * Math.sign(n));
  };

  const onRateClick = (data: RateUserStatForm) => {
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
      alert("Please fill in the blanks");
      btnOnOff();
      return;
    }

    // fixFloat(
    //   (+alreadyExists.originality * alreadyExists._count.users +
    //     +UserFictionStat[0]) /
    //     (+alreadyExists._count.users + 1)
    // )

    // console.log(data);

    rateUserStat(data);
    unboundMutate(
      `/api/fictions/${router.query.id}`,
      (prev: any) => ({
        ...prev,
        fiction: {
          ...prev?.fiction,
          userFictionStat: {
            originality:
              ((+prev?.fiction?.userFictionStat?.originality || 0) *
                (+prev?.fiction?.userFictionStat?._count?.users || 0) +
                +curOriginality) /
              ((+prev?.fiction?.userFictionStat?._count?.users || 0) + 1),
            writing:
              ((+prev?.fiction?.userFictionStat?.writing || 0) *
                (+prev?.fiction?.userFictionStat?._count?.users || 0) +
                +curWriting) /
              ((+prev?.fiction?.userFictionStat?._count?.users || 0) + 1),
            character:
              ((+prev?.fiction?.userFictionStat?.character || 0) *
                (+prev?.fiction?.userFictionStat?._count?.users || 0) +
                +curCharacter) /
              ((+prev?.fiction?.userFictionStat?._count?.users || 0) + 1),
            verisimilitude:
              ((+prev?.fiction?.userFictionStat?.verisimilitude || 0) *
                (+prev?.fiction?.userFictionStat?._count?.users || 0) +
                +curVerisimilitude) /
              ((+prev?.fiction?.userFictionStat?._count?.users || 0) + 1),
            synopsisComposition:
              ((+prev?.fiction?.userFictionStat?.synopsisComposition || 0) *
                (+prev?.fiction?.userFictionStat?._count?.users || 0) +
                +curSynopsisCompositon) /
              ((+prev?.fiction?.userFictionStat?._count?.users || 0) + 1),
            value:
              ((+prev?.fiction?.userFictionStat?.value || 0) *
                (+prev?.fiction?.userFictionStat?._count?.users || 0) +
                +curValue) /
              ((+prev?.fiction?.userFictionStat?._count?.users || 0) + 1),
            _count: {
              users: +prev?.fiction?.userFictionStat?._count?.users + 1 || 1,
            },
          },
        },
        userRation: {
          originality: +curOriginality,
          writing: +curWriting,
          character: +curOriginality,
          verisimilitude: +curVerisimilitude,
          synopsisComposition: +curSynopsisCompositon,
          value: +curValue,
        },
      }),
      false
    );
    btnOnOff();
  };

  // console.log(data ? data : null);
  // console.log("Hi");
  // console.log(watch());
  // console.log(UserStatData?.UserFictionStat);

  // console.log(userCount);

  return (
    <form className=" w-full" onSubmit={handleSubmit(onRateClick)}>
      <div className=" grid grid-cols-2 mt-3">
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
        kind="text"
      ></Input>
      <button
        id="rateButton"
        type="submit"
        className="w-full bg-white  hover:border-gray-300 text-black  px-4 border-[0.5px] border-[#BBBBBB] border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none"
      >
        등록
      </button>
    </form>
  );
}
