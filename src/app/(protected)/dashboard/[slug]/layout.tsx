import React from "react";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

function Layout({ children, params }: Props) {
  // QueryClient

  //   WIP: query client and fetch data
  return <div className="p-4">{children}</div>;
}

export default Layout;
