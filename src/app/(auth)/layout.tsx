import { ClerkProvider } from "@clerk/nextjs";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full">
      <ClerkProvider>{children}</ClerkProvider>
    </main>
  );
};

export default layout;
