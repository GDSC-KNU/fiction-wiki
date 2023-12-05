import Modal from "@components/common/Modal";
import { useOverlay } from "@toss/use-overlay";
import React, { ComponentProps, useRef } from "react";

export function useModal() {
  const overlay = useOverlay();
  const ref = useRef<HTMLDivElement>(null);

  const openModal = (props: ComponentProps<typeof Modal>) =>
    new Promise((resolve) => {
      overlay.open(({ isOpen, close }) => {
        return (
          <>
            {isOpen ? (
              <div
                ref={ref}
                onClick={(e: React.MouseEvent) => {
                  {
                    e.target === ref.current ? close() : null;
                  }
                  resolve(false);
                }}
              >
                <Modal {...props} />
              </div>
            ) : null}
          </>
        );
      });
    });

  return { open: openModal, close: overlay.close };
}
