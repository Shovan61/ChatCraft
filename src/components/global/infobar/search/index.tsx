import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

function Search() {
  return (
    <div className="flex overflow-hidden gap-x-2 border border-b-gray-400 rounded-full px-4 py-1 items-center flex-1">
      <SearchIcon />
      <Input
        placeholder="Search by name, email or status"
        className="border-none outline-none ring-0 focus:ring-0 flex-1"
      />
    </div>
  );
}

export default Search;
