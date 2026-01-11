"use client";

import { Button } from "@/components/ui/button";
import React, { useMemo } from "react";
import { AutomationDuoToneWhite } from "@/icons";
import { v4 } from "uuid";
import { Spinner } from "@/components/ui/spinner";
import { useCreateAutomation } from "@/hooks/use-automation";

const CreateAutomation = () => {
  const mutationId = useMemo(() => v4(), []);

  const { isPending, mutate } = useCreateAutomation(mutationId);

  return (
    <Button
      onClick={() => {
        mutate({
          name: "Untitled",
          id: mutationId,
          createdAt: new Date(),
          keywords: [],
        });
      }}
      className="lg:px-10 py-6 cursor-pointer hover:opacity-95 text-white rounded-full "
    >
      {isPending ? (
        <>
          <Spinner />
          <p className="lg:inline hidden">Creating...</p>
        </>
      ) : (
        <>
          <AutomationDuoToneWhite />
          <p className="lg:inline hidden">Create an Automation</p>
        </>
      )}
    </Button>
  );
};

export default CreateAutomation;
