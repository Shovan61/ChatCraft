"use client";

import { Separator } from "@/components/ui/separator";
import { PAGE_BREAD_CRUMBS } from "@/constants/pages";
import { usePaths } from "@/hooks/use-paths";
import { Menu } from "lucide-react";
import Image from "next/image";
import Items from "../sidebar/items";
import ClerkAuthState from "../clerk-auth-state/ClerkAuthState";
import { HelpDuoToneWhite } from "@/icons";
import { Notifications } from "./notifications";
import Search from "./search";
import CreateAutomation from "../create-automation";
import GoToAutomationsButton from "../goto-automation-button";
import Sheet from "../sheet";
import MainBreadCrumb from "../main-bread-crumb";

type Props = { slug: string };

function InfoBar({ slug }: Props) {
  const { page } = usePaths();
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug;

  return (
    currentPage && (
      <div className="flex flex-col">
        <div className="flex gap-x-3 lg:gap-x-5 justify-end">
          <span className="lg:hidden flex items-center flex-1 gap-x-2">
            <Sheet trigger={<Menu />} className="lg:hidden" side="left">
              <div className="flex flex-col gap-y-5 w-full h-full p-3  bg-opacity-90 bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl">
                <div className="flex gap-x-2 items-center p-5 justify-center">
                  <Image src="/logo.png" width={200} height={200} alt="Icon" />
                </div>
                <div className="flex flex-col py-3">
                  <Items page={page} slug={slug} />
                </div>
                <div className="px-16">
                  <Separator
                    orientation="horizontal"
                    className="bg-[#333336]"
                  />
                </div>
                <div className="px-3 flex flex-col gap-y-5">
                  <div className="flex gap-x-2">
                    <ClerkAuthState />
                    <span className="text-[#9B9CA0]">Profile</span>
                  </div>
                  <div className="flex gap-x-3">
                    <HelpDuoToneWhite />
                    <span className="text-[#9B9CA0]">Help</span>
                  </div>
                </div>
              </div>
            </Sheet>
          </span>
          <Search />
          <CreateAutomation />
          {/* <GoToAutomationsButton /> */}
          <Notifications />
        </div>
        <MainBreadCrumb page={page === slug ? "Home" : page} slug={slug} />
      </div>
    )
  );
}

export default InfoBar;
