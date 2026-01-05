import Sidebar from "@/components/global/sidebar";
import React from "react";
import Image from "next/image";
import InfoBar from "@/components/global/infobar";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

function Layout({ children, params }: Props) {
  // QueryClient

  //   WIP: query client and fetch data
  return (
    <div className="p-4">
      <Sidebar slug={params.slug} />
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
        <InfoBar slug={params.slug} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
