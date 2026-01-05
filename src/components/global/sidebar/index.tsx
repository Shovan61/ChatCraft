"use client";

import { Separator } from "@/components/ui/separator";
import { usePaths } from "@/hooks/use-paths";
import Image from "next/image";
import Items from "./items";
import ClerkAuthState from "../clerk-auth-state/ClerkAuthState";
import { HelpDuoToneWhite } from "@/icons";

type Props = {
  slug: string;
};

function Sidebar({ slug }: Props) {
  const { page } = usePaths();

  return (
    <div
      className="
    w-62.5 
    border
    border-gray-300
    radial 
    fixed 
    left-0 
    lg:inline-block
     hidden 
     bottom-0 
     top-0 
     m-3 
     rounded-3xl 
     overflow-hidden"
    >
      <div
        className="flex flex-col 
      gap-y-5
       w-full 
       h-full 
       p-3 
       bg-opacity-90 
       bg-clip-padding 
       backdrop-filter 
       backdrop--blur__safari 
       backdrop-blur-3xl"
      >
        <div className="flex gap-x-2 items-center p-5 justify-center">
          <Image src="/logo.png" width={200} height={200} alt="Icon" />
        </div>
        <div className="flex flex-col py-3">
          <Items page={page} slug={slug} />
        </div>
        <div className="px-3">
          <Separator orientation="horizontal" className="bg-gray-300 w-full" />
        </div>
        <div className="px-3 flex flex-col gap-y-5">
          <div className="flex gap-x-2 items-center">
            <ClerkAuthState />
            <p className="text-gray-500">Profile</p>
          </div>
          <div className="flex gap-x-3">
            <HelpDuoToneWhite />
            <p className="text-gray-500">Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
