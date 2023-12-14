"use client";

import React from "react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@components/common/Button";
import Input from "@components/common/Input";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
import useUser from "@libs/client/useUser";

interface EnterForm {
  email?: string;
  phone?: string;
}

interface TokenForm {
  token: string;
}

interface MutationResult {
  ok: boolean;
}

const Enter: NextPage = () => {
  // const { data: session } = useSession();
  const { user: session } = useUser();
  const [enter, { loading, data }] =
    useMutation<MutationResult>("/api/users/enter");
  const [confirmToken, { loading: tokenLoading, data: tokenData }] =
    useMutation<MutationResult>("/api/users/confirm");

  const { register, handleSubmit, reset } = useForm<EnterForm>();
  const { register: tokenRegister, handleSubmit: tokenHandleSubmit } =
    useForm<TokenForm>();
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => {
    reset();
    setMethod("email");
  };
  const onPhoneClick = () => {
    reset();
    setMethod("phone");
  };
  const onValid = (validForm: EnterForm) => {
    if (loading) return;
    enter(validForm, "POST");
  };

  const onTokenValid = (validForm: TokenForm) => {
    if (tokenLoading) return;
    confirmToken(validForm, "POST");
  };

  const router = useRouter();

  useEffect(() => {
    if (session) {
      // User is authenticated
      if (
        document.referrer &&
        new URL(document.referrer).hostname === window.location.hostname
      ) {
        // Redirect to the referrer page if it's from the same domain
        router.push(document.referrer);
      } else {
        // Use the browser's history to go back or redirect to a default page
        window.history.length > 2 ? window.history.back() : router.push("/");
      }
    }
  }, [session, router]);

  return (
    <div className="mt-16 px-4">
      <h3 className="text-center text-3xl font-bold">
        소설위키에 오신 것을 환영합니다!
      </h3>
      <div className=" flex justify-center text-red-600">
        구글 로그인만 지원 중
      </div>
      <div className="mt-12">
        {data?.ok ? (
          <form
            onSubmit={tokenHandleSubmit(onTokenValid)}
            className="mt-8 flex flex-col space-y-4"
          >
            <Input
              register={tokenRegister("token", {
                required: true,
              })}
              name="token"
              label="Confirm Token"
              type="number"
              required
            />

            <Button text={tokenLoading ? "Loading" : "Confirm Token"} />
          </form>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <h5 className="text-sm font-medium text-gray-500">
                아래 방식으로 회원가입하기
              </h5>
              <div className="mt-8 grid  w-full grid-cols-2 border-b ">
                <button
                  className={cls(
                    "border-b-2 pb-4 text-sm font-medium",
                    method === "email"
                      ? " border-blue-400 text-blue-300"
                      : "border-transparent text-gray-500 hover:text-gray-400"
                  )}
                  onClick={onEmailClick}
                >
                  이메일
                </button>
                <button
                  className={cls(
                    "border-b-2 pb-4 text-sm font-medium",
                    method === "phone"
                      ? " border-blue-400 text-blue-300"
                      : "border-transparent text-gray-500 hover:text-gray-400"
                  )}
                  onClick={onPhoneClick}
                >
                  휴대전화
                </button>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onValid)}
              className="mt-8 flex flex-col space-y-4"
            >
              {method === "email" ? (
                <Input
                  register={register("email", {
                    required: true,
                  })}
                  name="email"
                  label="이메일 주소"
                  type="email"
                  required
                />
              ) : null}
              {method === "phone" ? (
                <Input
                  register={register("phone")}
                  name="phone"
                  label="휴대전화 번호"
                  type="number"
                  kind="phone"
                  required
                />
              ) : null}
              {method === "email" ? (
                <Button
                  disabled={true}
                  text={loading ? "로딩 중..." : "임시 로그인 링크 보내기"}
                />
              ) : null}
              {method === "phone" ? (
                <Button
                  disabled={true}
                  text={loading ? "로딩 중..." : "임시 비밀번호 보내기"}
                />
              ) : null}
            </form>
          </>
        )}

        <div className="mt-8">
          <div className="relative">
            <div className="absolute w-full border-t border-gray-300" />
            <div className="relative -top-3 text-center ">
              <span className="bg-white px-2 text-sm text-gray-500">
                혹은 SNS 계정으로 로그인
              </span>
            </div>
          </div>
          <div className="">
            {session ? (
              <div className=" flex justify-center">
                <button
                  className=" flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  onClick={() => signOut()}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                      />
                      <path
                        fill="#4285F4"
                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                      />
                      <path
                        fill="#34A853"
                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                      />
                      <path fill="none" d="M0 0h48v48H0z" />
                    </svg>
                  </span>
                  <span className=" ml-[8px]">로그아웃</span>
                </button>
              </div>
            ) : (
              <div className=" flex justify-center">
                <button
                  className=" flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  onClick={() => {
                    signIn("google");
                  }}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                      />
                      <path
                        fill="#4285F4"
                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                      />
                      <path
                        fill="#34A853"
                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                      />
                      <path fill="none" d="M0 0h48v48H0z" />
                    </svg>
                  </span>
                  <span className=" ml-[8px]">구글 계정으로 로그인</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enter;
