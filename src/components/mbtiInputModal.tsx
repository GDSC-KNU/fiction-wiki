import React, { useState } from "react";
import useMutation from "@libs/client/useMutation";
import { useSession } from "next-auth/react";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  // onSubmit: (mbti: string) => void;
}

interface SubmitUserInfoMutation {
  ok: boolean;
}

const MBTI_List = [
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
];

function isValidMBTI(str: string) {
  const mbtiRegex =
    /^(ISTJ|ISFJ|INFJ|INTJ|ISTP|ISFP|INFP|INTP|ESTP|ESFP|ENFP|ENTP|ESTJ|ESFJ|ENFJ|ENTJ)$/i;
  return mbtiRegex.test(str);
}

const MBTIInputModal: React.FC<Props> = ({ isOpen, closeModal }) => {
  const { data: session } = useSession();
  const [mbti, setMBTI] = useState("");
  const [sex, setSex] = useState("");
  const [submitUserInfo, { loading, data, error }] =
    useMutation<SubmitUserInfoMutation>(`/api/users/me`);

  const handleMBTISelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const mbti = event.target.value.toUpperCase();

    setMBTI(mbti);
  };

  const handleSexSelect = (selectedSex: any) => {
    setSex(selectedSex);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // onSubmit(mbti);
    if (!isValidMBTI(mbti)) {
      alert("올바른 MBTI를 입력해주세요");
      return;
    }
    submitUserInfo({ mbti: mbti, sex: sex }, "PUT");
    setMBTI("");
    closeModal();
  };

  // console.log(sex);
  return (
    <div
      className={`fixed inset-0 z-10 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex min-h-screen items-center justify-center backdrop-blur-sm">
        <div className="relative mx-auto max-w-sm rounded-md border bg-white ">
          <form onSubmit={handleSubmit}>
            <div className="p-6">
              <label
                htmlFor="mbti"
                className="mb-2 block text-lg font-medium text-gray-700"
              >
                MBTI
              </label>
              <input
                id="mbti"
                type="text"
                className="mb-4 w-full rounded-md border border-gray-400 px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:ring"
                placeholder="MBTI를 입력하세요"
                value={mbti}
                onChange={handleMBTISelect}
              />
              <label className="mb-2 block text-lg font-medium text-gray-700">
                성별
              </label>
              <div className=" mb-8 flex justify-between  px-5 leading-tight ">
                <label>
                  <input
                    value="남"
                    placeholder="성별을 입력하세요"
                    id="sex"
                    type="radio"
                    checked={sex === "남"}
                    className=" peer hidden"
                    onChange={() => handleSexSelect("남")}
                  />
                  <div className="  rounded-md bg-white px-5  py-2 text-gray-700 hover:bg-blue-600 peer-checked:bg-blue-500 peer-checked:text-white">
                    남
                  </div>
                </label>
                <label>
                  <input
                    value="여"
                    placeholder="성별을 입력하세요"
                    id="sex"
                    type="radio"
                    checked={sex === "여"}
                    className=" peer hidden"
                    onChange={() => handleSexSelect("여")}
                  />
                  <div className="  rounded-md  bg-white px-5 py-2 text-gray-700  hover:bg-blue-600 focus:ring peer-checked:bg-blue-500 peer-checked:text-white">
                    여
                  </div>
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 font-medium text-gray-500"
                  onClick={closeModal}
                >
                  닫기
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring"
                >
                  제출
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MBTIInputModal;
