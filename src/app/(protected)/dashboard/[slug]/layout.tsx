import Sidebar from "@/components/global/sidebar";
import React from "react";
import Image from "next/image";

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
    </div>
  );
}

export default Layout;
