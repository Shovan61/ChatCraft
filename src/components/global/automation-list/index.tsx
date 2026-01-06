"use client"

import { Button } from "@/components/ui/button";
import { usePaths } from "@/hooks/use-paths";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

function AutomationList() {
  const { pathname } = usePaths();
  return (
    <div className="flex flex-col gap-y-3">
      <Link
        href={`${pathname}/1`}
        key={1}
        className=" hover:opacity-80 transition duration-100 rounded-xl p-5 border radial--gradient--automations flex border-[#545454]"
      >
        <div className="flex flex-col flex-1 items-start">
          <h2 className="text-xl font-semibold">{"automation.mane"}</h2>
          <p className="text-[#9B9CA0] text-sm font-light mb-2">
            This is from the comment
          </p>

          {/* {automation.keywords.length > 0 ? ( */}
          <div className="flex gap-x-2 flex-wrap mt-3">
            {/* { */}

            {/* automation.keywords.map((keyword, key) => ( */}
            <div
              // key={keyword.id}
              className={cn(
                "rounded-full px-4 py-1 capitalize",
                (0 + 1) % 1 == 0 &&
                  "bg-keyword-green/15 border-2 border-keyword-green",
                (1 + 1) % 2 == 0 &&
                  "bg-keyword-purple/15 border-2 border-keyword-purple",
                (2 + 1) % 3 == 0 &&
                  "bg-keyword-yellow/15 border-2 border-keyword-yellow",
                (3 + 1) % 4 == 0 &&
                  "bg-keyword-red/15 border-2 border-keyword-red"
              )}
            >
              {/* {keyword.word} */}
              Test
            </div>
            {/* )) */}
            {/* } */}
          </div>
          {/* ) : (
            <div className="rounded-full border-2 mt-3 border-dashed border-white/60 px-3 py-1">
              <p className="text-sm text-[#bfc0c3]">No Keywords</p>
            </div>
          )} */}
        </div>
        <div className="flex flex-col justify-between">
          <p className="capitalize text-sm font-light text-[#9B9CA0]">
            {/* {getMonth(automation.createdAt.getUTCMonth() + 1)}{" "}
            {automation.createdAt.getUTCDate() === 1
              ? `${automation.createdAt.getUTCDate()}st`
              : `${automation.createdAt.getUTCDate()}th`}{" "}
            {automation.createdAt.getUTCFullYear()} */}
          </p>

          {/* {automation.listener?.listener === "SMARTAI" ? ( */}
          <Button className="w-full">
            Smart AI
          </Button>
          {/* ) : (
            <Button className="bg-background-80 hover:bg-background-80 text-white">
              Standard
            </Button>
          )} */}
        </div>
      </Link>
    </div>
  );
}

export default AutomationList;
