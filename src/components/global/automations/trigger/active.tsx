import { InstagramBlue, PlaneBlue } from "@/icons";
import React from "react";

type Props = {
  type: string;
  keywords: {
    id: string;
    word: string;
    automationId: string | null;
  }[];
};

function ActiveTrigger({ keywords, type }: Props) {

  return (
    <div className="bg-background-80 p-3 rounded-xl w-full">
      <div className="flex gap-x-2 items-center">
        {type === "COMMENT" ? <InstagramBlue /> : <PlaneBlue />}
        <p className="text-lg">
          {type === "COMMENT"
            ? "User comments on my post"
            : "User sends me a direct message"}
        </p>
      </div>
      <p className="text-text-secondary">
        {type === "COMMENT"
          ? "If the user comments on a video that is setup to listen for keywords, this automation will trigger."
          : "If the user sends a direct message that is setup to listen for keywords, this automation will trigger."}
      </p>
      <div className="flex gap-2 mt-5 flex-wrap">
        {keywords.map((word) => (
          <div
            key={word.id}
            className="bg-gradient-to-br px-4 mt-3 mb-3 rounded-full py-2 from-[#3352CC] font-medium text-white to-[#1C2D70]"
          >
            <p>{word.word}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActiveTrigger;
