import React from "react";
import { BlueAddIcon } from "@/icons";
import PopOver from "../../popover";

type Props = {
  label: string;
  children: React.ReactNode;
};

function TriggerButton({ children, label }: Props) {
  return (
    <PopOver
      className="w-100"
      trigger={
        <div className="border-2 border-dashed w-full border-gray-100 hover:opacity-80 cursor-pointer transition duration-100 rounded-xl flex gap-x-2 justify-center items-center p-5">
          <BlueAddIcon />
          <p className="text-gray-500 font-bold">{label}</p>
        </div>
      }
    >
      {children}
    </PopOver>
  );
}

export default TriggerButton;
