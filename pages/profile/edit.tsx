import React, { useEffect } from "react";
import Button from "src/components/button";
import Input from "src/components/input";
import useMutation from "@libs/client/useMutation";
import type { NextPage } from "next";
// import { useRouter } from "next/router";
import { FieldErrors, useForm } from "react-hook-form";
// import Image from "next/image";
// import useSWR from "swr";

import useUser from "@libs/client/useUser";
import { useSession } from "next-auth/react";

interface EditProfileForm {
  name: string;
  papagoClientID: string;
  papagoClientKey: string;
}

interface EditProfileMutation {
  ok: boolean;
}

const EditProfile: NextPage = () => {
  const { data: nextSesesion } = useSession();
  const { user, isAdmin } = useUser(
    `/api/users/me?userId=${nextSesesion?.user?.id || ""}`
  );
  // console.log(user, isAdmin);
  const [editProfile, { loading, data }] = useMutation<EditProfileMutation>(
    `/api/users/me?userId=${user?.id}`
  );

  const { register, handleSubmit, resetField, watch, setValue } =
    useForm<EditProfileForm>({ mode: "onBlur" });

  useEffect(() => {
    if (user) {
      setValue("name", user?.name || "");
      setValue("papagoClientID", user?.clientID || "");
      setValue("papagoClientKey", user?.clientKey || "");
    }
  }, [user]);

  const onValid = async (data: EditProfileForm) => {
    if (loading) return;
    editProfile(data, "PUT");
    alert("수정되었습니다.");
    return;
  };

  const onInvalid = (errors: FieldErrors) => {
    if (loading) return;
    console.log(errors);
    if (errors) return;
  };

  return (
    <div className="mx-auto mt-12 min-h-[213px] max-w-[900px]">
      <div className=" border p-3">
        <form className=" " onSubmit={handleSubmit(onValid, onInvalid)}>
          <div className=" mb-5">
            <Input
              register={register("name", { required: true })}
              required
              label="name"
              name="name"
              type="text_detail"
            />
            <Input
              register={register("papagoClientID", { required: true })}
              required
              label="papagoClientID"
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
};

export default EditProfile;
