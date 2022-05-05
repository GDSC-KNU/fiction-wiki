import useMutation from "@libs/client/useMutation";
import { Fiction } from "@prisma/client";
import { useRouter } from "next/router";
import userRate from "pages/api/fictions/[id]/userRate";
import { FieldErrors, useForm } from "react-hook-form";
import Button from "./button";
import Input from "./input";
import useSWR, { useSWRConfig } from "swr";

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
          ...prev.fiction,
          userFictionStat: {
            ...prev.fiction.userFictionStat,
            _count: {
              users: (+prev?.fiction?.userFictionStat?._count?.users || 0) + 1,
            },
          },
        },
        ration: {
          originality: (+prev?.ration?.["originality"] || 0) + +curOriginality,
          writing: (+prev?.ration?.["writing"] || 0) + +curWriting,
          character: (+prev?.ration?.["character"] || 0) + +curCharacter,
          verisimilitude:
            (+prev?.ration?.["verisimilitude"] || 0) + +curVerisimilitude,
          synopsisComposition:
            (+prev?.ration?.["synopsisComposition"] || 0) +
            +curSynopsisCompositon,
          value: (+prev?.ration?.["value"] || 0) + +curValue,
        },
      }),
      false
    );
  };

  // console.log(data ? data : null);
  // console.log("Hi");
  console.log(UserStatData);
  console.log(userCount);

  return (
    <form className=" w-full" onSubmit={handleSubmit(onRateClick)}>
      <div className=" grid grid-cols-2 mt-3">
        <Input
          register={register("UserFictionStat.0", {
            max: 5,
            min: 0,
          })}
          required
          label="오리지널리티"
          name="UserFictionStat"
          type="number"
          kind="status"
        />
        <Input
          register={register("UserFictionStat.1")}
          required
          label="필력"
          name="UserFictionStat"
          type="number"
          kind="status"
        />
        <Input
          register={register("UserFictionStat.2")}
          required
          label="캐릭터성"
          name="UserFictionStat"
          type="number"
          kind="status"
        />
        <Input
          register={register("UserFictionStat.3")}
          required
          label="핍진성"
          name="UserFictionStat"
          type="number"
          kind="status"
        />
        <Input
          register={register("UserFictionStat.4")}
          required
          label="스토리"
          name="UserFictionStat"
          type="number"
          kind="status"
        />
        <Input
          register={register("UserFictionStat.5")}
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
