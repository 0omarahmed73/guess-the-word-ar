import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import CustomButton from "./CustomButton";

export function Modal({ setIsOpen, isOpen }) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg border bg-white p-12 rounded-lg">
          <DialogTitle className="font-bold text-center">
            هل أنت متأكد من إنهاء اللعبة؟
          </DialogTitle>
          <Description className="text-center mt-2">
            سوف يتم إنهاء اللعبة وفقدان النتيجة الحالية
          </Description>
          <div className="flex">
            <CustomButton
              type="success"
              onClick={() => window.location.reload()}
            >
              نعم
            </CustomButton>
            <CustomButton type="error" onClick={() => setIsOpen(false)}>
              لا
            </CustomButton>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
