import React from "react";
import type { NextPage } from "next";
// import Input from "@components/input";
import useUser from "@libs/client/useUser";

const EditProfile: NextPage = () => {
  const { user } = useUser();

  return <>edit page</>;
};

export default EditProfile;
