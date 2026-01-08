import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { ActiveAutomation } from "@/icons/active-automation";
import React from "react";

type Props = { id: string };

function ActivateAutomationButton({}: Props) {
  return (
    <Button
      //   disabled={isPending}
      onClick={() => {}}
      className="lg:px-10  hover:opacity-80 text-white rounded-full  ml-4"
    >
      {/* {isPending ? <Spinner className="animate-spin" /> : <ActiveAutomation />} */}

      <p className="lg:inline hidden">Active</p>
    </Button>
  );
}

export default ActivateAutomationButton;
