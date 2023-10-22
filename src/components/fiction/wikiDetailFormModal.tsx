"use client";

import React from "react";
import useKeyHandler from "@/hooks/useKeyHandler";

const WikiDetailFormModal = ({ isOpen, onClose, children }: any) => {
  useKeyHandler(() => {
    onClose();
  }, "Escape");

  if (!isOpen) {
    return null;
  }
  return (
    <div
      className={`fixed inset-0 z-30 flex items-center justify-center bg-black/50 pt-24 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div className="relative max-h-[80vh] overflow-y-auto rounded-lg bg-white text-start shadow-xl">
        <div className="sticky top-0 z-30 border-b-[1px] bg-white px-8 py-3">
          세부정보 수정
        </div>
        <div className="max-w-[600px] px-8  pt-4">{children}</div>
        <div className="sticky bottom-0 flex justify-center border-t-[1px]  bg-white p-4">
          <button
            className="rounded bg-blue-500 px-4 py-1 text-white"
            onClick={onClose}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default WikiDetailFormModal;
