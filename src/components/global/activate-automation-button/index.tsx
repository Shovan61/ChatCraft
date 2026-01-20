import { activateAutomation } from "@/actions/automations";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useMutationData } from "@/hooks/use-mutation-data";
import { useQueryAutomation } from "@/hooks/user-queries";
import { ActiveAutomation } from "@/icons/active-automation";
import React from "react";

type Props = { id: string };

function ActivateAutomationButton({ id }: Props) {
  const { data } = useQueryAutomation(id);
  const { mutate, isPending } = useMutationData(
    ["activate"],
    (data: { state: boolean }) => activateAutomation(id, data.state),
    "automation-info"
  );

  return (
    <Button
      disabled={isPending}
      onClick={() => mutate({ state: !data?.data?.active })}
      className="lg:px-10  hover:opacity-80 text-white rounded-full  ml-4"
    >
      {isPending ? <Spinner className="animate-spin" /> : <ActiveAutomation />}

      <p className="lg:inline hidden">
        {data?.data?.active ? "Disable" : "Activate"}
      </p>
    </Button>
  );
}

export default ActivateAutomationButton;
