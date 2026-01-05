"use client";

import { Button } from "@/components/ui/button";
import React, { useMemo } from "react";
import { AutomationDuoToneWhite } from "@/icons";
import { v4 } from "uuid";
import { Spinner } from "@/components/ui/spinner";

const CreateAutomation = () => {
  return (
    <Button className="lg:px-10 py-6 cursor-pointer hover:opacity-95 text-white rounded-full ">
      {/* <Spinner /> */}
      <AutomationDuoToneWhite />
      <p className="lg:inline hidden">Create an Automation</p>
    </Button>
  );
};

export default CreateAutomation;
