import { getAutomationInfo } from "@/actions/automations";
import AutomationsBreadCrumb from "@/components/global/automation-bread-cumb";
import Trigger from "@/components/global/automations/trigger";
import { prefetchUserAutomation } from "@/lib/react-query/prefetch";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const info = await getAutomationInfo(id);
  return {
    title: info.data?.name,
  };
}

async function Page({ params }: Props) {
  const { id } = await params;

  const query = new QueryClient();

  await prefetchUserAutomation(query, id);

  return (
    <HydrationBoundary state={dehydrate(query)}>
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
    </HydrationBoundary>
  );
}

export default Page;
