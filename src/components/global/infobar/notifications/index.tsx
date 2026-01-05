import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export const Notifications = () => {
  return (
    <Button className="bg-black cursor-pointer rounded-full py-6">
      <Bell color="white" fill="black" className="h-7 w-7"/>
    </Button>
  );
};
