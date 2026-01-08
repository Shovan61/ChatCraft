import AutomationsBreadCrumb from "@/components/global/automation-bread-cumb";
import Trigger from "@/components/global/automations/trigger";
import React from "react";

type Props = {
  params: { id: string };
};

async function Page({ params }: Props) {
  const { id } = await params;

  return (
    <div className=" flex flex-col items-center gap-y-20">
      <AutomationsBreadCrumb id={id} />
      <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col  gap-y-3">
        <div className="flex gap-x-2">
          {/* <Warning /> */}
          When...
        </div>
        <Trigger id={id} />
      </div>
      {/* <ThenNode id={id} />
        <PostNode id={id} /> */}
    </div>
  );
}

export default Page;
