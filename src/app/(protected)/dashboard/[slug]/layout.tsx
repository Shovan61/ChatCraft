import Sidebar from "@/components/global/sidebar";
import React from "react";
import { QueryClient } from '@tanstack/react-query'
import InfoBar from "@/components/global/infobar";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

async function Layout({ children, params }: Props) {
  const { slug } = await params;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})
  //   WIP: query client and fetch data
  return (
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
  );
}

export default Layout;
