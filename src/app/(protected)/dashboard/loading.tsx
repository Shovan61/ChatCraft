import { Spinner } from "@/components/ui/spinner";
import React from "react";

function Loading() {
  return (
    <div className="h-screen w-full justify-center flex items-center">
      <Spinner className="h-10 w-10" />
    </div>
  );
}

export default Loading;
