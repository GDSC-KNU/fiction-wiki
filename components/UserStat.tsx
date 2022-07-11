import useMutation from "@libs/client/useMutation";
import { Fiction } from "@prisma/client";
import { useRouter } from "next/router";
import userRate from "pages/api/fictions/[id]/userRate";
import { FieldErrors, useForm } from "react-hook-form";
import Button from "./button";
import Input from "./input";
import useSWR, { useSWRConfig } from "swr";
import { validateRequest } from "twilio/lib/webhooks/webhooks";

interface RateUserStatForm {
  UserFictionStat: number[];
}

export default function UserStat() {
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

  const onRateClick = (data: RateUserStatForm) => {
    rateUserStat(data);
    unboundMutate(
      `/api/fictions/${router.query.id}`,
      (prev: any) => ({
        ...prev,
        fiction: {
          ...prev?.fiction,
          userFictionStat: {
            originality: +curOriginality,
            writing: +curWriting,
            character: +curCharacter,
            verisimilitude: +curVerisimilitude,
            synopsisComposition: +curSynopsisCompositon,
            value: +curValue,
            _count: {
              users: UserStatData.userRation
                ? +prev?.fiction?.userFictionStat?._count?.users || 0
                : (+prev?.fiction?.userFictionStat?._count?.users || 0) + 1,
            },
          },
        },
        ration: {
          originality:
            (+prev?.fiction?.userFictionStat?.originality || 0) -
            (+prev?.userRation?.originality || 0) +
            +curOriginality,
          writing:
            (+prev?.fiction?.userFictionStat?.writing || 0) -
            prev?.userRation?.writing +
            +curWriting,
          character:
            (+prev?.fiction?.userFictionStat?.character || 0) -
            prev?.userRation?.character +
            +curCharacter,
          verisimilitude:
            (+prev?.fiction?.userFictionStat?.verisimilitude || 0) -
            prev?.userRation?.verisimilitude +
            +curVerisimilitude,
          synopsisComposition:
            (+prev?.fiction?.userFictionStat?.synopsisComposition || 0) -
            prev?.userRation?.synopsisComposition +
            +curSynopsisCompositon,
          value:
            (+prev?.fiction?.userFictionStat?.value || 0) -
            prev?.userRation?.value +
            +curValue,
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
  };

  // console.log(data ? data : null);
  // console.log("Hi");
  // console.log(UserStatData);
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
      <button
        type="submit"
        className="w-full bg-white  hover:border-gray-300 text-black  px-4 border-[0.5px] border-[#BBBBBB] border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none"
      >
        등록
      </button>
    </form>
  );
}
