"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AutomationDuoToneWhite } from "@/icons";
import { usePaths } from "@/hooks/use-paths";

function GoToAutomationsButton() {
  const { pathname } = usePaths();

  return (
    <Button className="lg:px-10 py-6hover:opacity-80 text-white rounded-full ">
      <AutomationDuoToneWhite />
      <Link href={`${pathname}/automations`}>
        <p className="lg:inline hidden">Go to Automations</p>
      </Link>
    </Button>
  );
}

export default GoToAutomationsButton;
