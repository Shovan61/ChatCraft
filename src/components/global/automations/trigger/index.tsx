"use client";

import { useTriggers } from "@/hooks/use-automation";
import { useQueryAutomation } from "@/hooks/user-queries";
import React from "react";
import ActiveTrigger from "./active";
import { Separator } from "@/components/ui/separator";
import ThenAction from "../then/then-action";
import TriggerButton from "../trigger-button";
import { AUTOMATION_TRIGGERS } from "@/constants/automation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Keywords from "./keywords";

type Props = {
  id: string;
};

function Trigger({ id }: Props) {
  const { types, onSetTrigger, onSaveTrigger, isPending } = useTriggers(id);
  const { data } = useQueryAutomation(id);

  if (data?.data && data?.data?.trigger.length > 0) {
    return (
      <div className="flex flex-col ga-y-6 items-center shadow-md px-3 py-1 border border-gray-50 rounded-xl">
        <ActiveTrigger
          type={data.data.trigger[0].type}
          keywords={data.data.keywords}
        />

        {data?.data?.trigger.length > 1 && (
          <>
            <div className="relative w-6/12 my-4">
              <p className="absolute transform  px-2 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2">
                or
              </p>
              <Separator
                orientation="horizontal"
                className="border-muted border"
              />
            </div>
            <ActiveTrigger
              type={data.data.trigger[1].type}
              keywords={data.data.keywords}
            />
          </>
        )}

        {!data.data.listner && <ThenAction id={id} />}
      </div>
    );
  }

  return (
    <TriggerButton label="Add Trigger">
      <div className="flex flex-col gap-y-2">
        {AUTOMATION_TRIGGERS.map((trigger) => (
          <div
            key={trigger.id}
            onClick={() => onSetTrigger(trigger.type)}
            className={cn(
              "hover:opacity-80 text-black font-medium mb-3 rounded-xl flex cursor-pointer flex-col p-3 gap-y-2",
              !types?.find((t) => t === trigger.type)
                ? "bg-background-80"
                : "bg-gradient-to-br from-[#3352CC] text-white font-medium to-[#1C2D70]",
                
            )}
          >
            <div className="flex gap-x-2 items-center">
              {trigger.icon}
              <p className="font-bold">{trigger.label}</p>
            </div>
            <p className="text-sm font-light">{trigger.description}</p>
          </div>
        ))}
        <Keywords id={id} />
        <Button
          onClick={onSaveTrigger}
          disabled={types?.length === 0}
          className="bg-gradient-to-br from-[#3352CC] font-medium text-white to-[#1C2D70]"
        >
          {isPending && <Spinner />}
          Create Trigger
        </Button>
      </div>
    </TriggerButton>
  );
}

export default Trigger;
