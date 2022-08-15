import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import useUser from "@libs/client/useUser";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const EditProfile: NextPage = () => {
  const { user } = useUser();

  return <>edit page</>;
};

export default EditProfile;
