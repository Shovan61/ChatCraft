import Sidebar from "@/components/global/sidebar";
import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import InfoBar from "@/components/global/infobar";
import { prefetchUserProfile } from "@/lib/react-query/prefetch";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

async function Layout({ children, params }: Props) {
  const { slug } = await params;
  const query = new QueryClient();

  await prefetchUserProfile(query);
  await prefetchUserAutomations(query)
  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="p-4">
        <Sidebar slug={slug} />
        <div
          className="
      lg:ml-62.5 
      lg:pl-10 
      lg:py-5 
      flex 
      flex-col 
      overflow-auto
      "
        >
          <InfoBar slug={slug} />
          {children}
        </div>
      </div>
    </HydrationBoundary>
  );
}

export default Layout;
