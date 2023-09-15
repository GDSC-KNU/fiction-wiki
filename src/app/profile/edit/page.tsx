"use client";

import React, { useEffect } from "react";
import Button from "@components/common/button";
import Input from "@components/common/input";
import useMutation from "@libs/client/useMutation";
import type { NextPage } from "next";
// import { useRouter } from "next/router";
import { FieldErrors, useForm } from "react-hook-form";
// import Image from "next/image";
// import useSWR from "swr";
import { useRouter } from "next/navigation";

import useUser from "@libs/client/useUser";

interface EditProfileForm {
  nickname: string;
  naverAccessKey: string;
  naverSecretKey: string;
  papagoClientID: string;
  papagoClientKey: string;
}

interface EditProfileMutation {
  ok: boolean;
}

export default function EditProfile() {
  const router = useRouter();
  // const { data: nextSesesion } = useSession();
  const { user, isAdmin } = useUser();
  // console.log(user, isAdmin);
  const [editProfile, { loading, data }] = useMutation<EditProfileMutation>(
    `/api/users/me?userId=${user?.id}`
  );

  const { register, handleSubmit, resetField, watch, setValue } =
    useForm<EditProfileForm>({ mode: "onBlur" });
  console.log(user);
  useEffect(() => {
    if (user) {
      setValue("nickname", user?.nickname || "");
      setValue("naverAccessKey", user?.naverAccessKey || "");
      setValue("naverSecretKey", user?.naverSecretKey || "");
      setValue("papagoClientID", user?.clientID || "");
      setValue("papagoClientKey", user?.clientKey || "");
    }
  }, [user]);

  const onValid = async (data: EditProfileForm) => {
    if (loading) return;
    await editProfile(data, "PUT");
    if (data) {
      alert("프로필이 업데이트 되었습니다.");
      router.push("/profile");
      window.location.reload();
    } else {
      alert("Error updating profile.");
    }
  };

  const onInvalid = (errors: FieldErrors) => {
    if (loading) return;
    console.log(errors);
    if (errors) return;
  };

  if (!user) return <div>...loading</div>;

  return (
    <div className="mx-auto mt-12 min-h-[213px] max-w-[900px]">
      <div className=" p-4 text-gray-400">
        * 아래의 accessKey, scretKey 등 정보는 번역기 실행에만 사용됩니다. api
        key를 발급받고 사용하는 순간부터 네이버에 등록된 계정으로 요금이
        청구되니 주의하세요.
      </div>
      <div className=" border p-3">
        <form className=" " onSubmit={handleSubmit(onValid, onInvalid)}>
          <div className=" mb-5">
            <Input
              register={register("nickname", { required: true })}
              required
              label="nickname"
              name="nickname"
              type="text_detail"
            />
            <Input
              register={register("naverAccessKey", { required: true })}
              required
              label="naverAccessKey (https://www.ncloud.com/mypage/manage/authkey 참고)"
              name="naverAccessKey"
              type="text_detail"
            />
            <Input
              register={register("naverSecretKey", { required: true })}
              required
              label="naverSecretKey"
              name="naverSecretKey"
              type="text_detail"
            />
            <Input
              register={register("papagoClientID", { required: true })}
              required
              label="papagoClientID (https://console.ncloud.com/papago-translation/apis 참고)"
              name="papagoClientID"
              type="text_detail"
            />
            <Input
              register={register("papagoClientKey", { required: true })}
              required
              label="papagoClientKey"
              name="papagoClientKey"
              type="text_detail"
            />
          </div>
          <Button text={loading ? "Loading..." : "저장"} />
        </form>
      </div>
    </div>
  );
}
