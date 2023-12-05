"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import XIcon from "@public/svg/x.svg";
import { Button2 } from "./Button2";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  close: () => void;
  exit?: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, close, exit, children }: ModalProps) => {
  const isMobile = useIsMobile();
  const backSection = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<any>(null);

  const modalRoot = document.getElementById("modal")!;
  const controls = useAnimation();

  const onDragEnd = (event: PointerEvent, { point, velocity }: any): void => {
    const shouldClose =
      (velocity.y > -20 &&
        (event.type === "pointerup" || event.target === backSection.current)) ||
      velocity.y > 20 ||
      (velocity.y >= 0 && point.y > 45);

    if (shouldClose) {
      controls.start("hidden").then(() => {
        timeoutRef.current = setTimeout(() => {
          close();
        }, 50); // Adjust the duration as needed
      });
    } else {
      controls.start("visible");
    }
  };

  useEffect(() => {
    if (isOpen) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }

    // clear timeout when unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen, controls]);

  if (!isOpen) return null;

  return isMobile
    ? // Bottom sheet
      createPortal(
        // <div
        //   ref={backSection}
        //   onClick={(e) => {
        //     if (e.target === backSection.current) close();
        //   }}
        //   // className=" fixed top-0 h-screen w-screen  bg-red-600  transition duration-300 ease-in-out"
        //   className={`${
        //     isOpen ? " " : " translate-y-full"
        //   } fixed inset-0 z-20 bg-black/50 transition duration-300 ease-in-out`}
        // >
        //   <div
        //     ref={backSection}
        //     className=" bg-yellow fixed bottom-0 left-0 w-screen rounded-t-xl bg-white p-4"
        //   >
        //     <div className=" flex flex-col items-center">
        //       <button
        //         id="bottomSheet-header"
        //         className=" relative bottom-1 h-1 w-10 rounded-xl bg-gray-400"
        //         onClick={close}
        //       ></button>
        //       <div className=" p- mb-4 flex w-full justify-between border-b-[1px]">
        //         <div className=" font-bold">필터링</div>
        //         <div
        //           onClick={close}
        //           className=" flex items-center justify-center"
        //         >
        //           <XIcon className=" h-4 w-4" />
        //         </div>
        //       </div>
        //     </div>
        //     {children}
        //   </div>
        // </div>
        <motion.div
          ref={backSection}
          initial="hidden"
          animate={controls}
          onClick={(e) => {
            if (e.target === backSection.current) close();
          }}
          className="fixed inset-0 z-20 bg-black/50 transition duration-300 ease-in-out"
        >
          <motion.div
            ref={backSection}
            className=" fixed bottom-0 left-0 w-screen overflow-y-scroll rounded-t-xl bg-white p-4"
            variants={{
              hidden: { y: "100%" },
              visible: { y: 0 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            onDragEnd={onDragEnd}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.7}
          >
            <div className="flex flex-col items-center">
              <div className=" flex h-6 w-full justify-center">
                <div
                  id="bottomSheet-header"
                  className=" h-1 w-10 rounded-xl bg-gray-400"
                ></div>
              </div>
              <div className=" mb-4 flex w-full justify-between border-b-[1px]">
                <div className="font-bold">필터링</div>
                <div
                  onClick={close}
                  className="flex items-center justify-center"
                >
                  <XIcon className="h-4 w-4" />
                </div>
              </div>
            </div>
            {children}
          </motion.div>
        </motion.div>,
        modalRoot
      )
    : // Modal Popup
      createPortal(
        <div
          onClick={(e) => {
            if (e.target === backSection.current) close();
          }}
          data-te-modal-init
          data-te-modal-non-invasive="true"
          className="fixed inset-0 z-[1055] h-screen w-full overflow-hidden outline-none"
        >
          <div
            ref={backSection}
            data-te-modal-dialog-ref
            className=" relative flex h-full w-auto translate-y-[-50px] items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:my-7 min-[576px]:max-w-[500px]"
          >
            <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative bottom-40 flex w-full flex-col rounded-md border-[1px]  bg-white bg-clip-padding text-current shadow-lg dark:bg-neutral-600">
              <div className="flex flex-shrink-0 items-center justify-between rounded-t-md  border-neutral-100 border-opacity-100 px-4 pt-4 dark:border-opacity-50">
                <h5 className="text-md font-bold leading-normal text-neutral-800 dark:text-neutral-200">
                  필터
                </h5>
                <Button2 onClick={close} variant="ghost" size="xs">
                  <XIcon className="h-4 w-4" />
                </Button2>
              </div>
              <div className="relative flex-auto p-4" data-te-modal-body-ref>
                {children}
              </div>
            </div>
          </div>
        </div>,
        modalRoot
      );
};

export default Modal;
