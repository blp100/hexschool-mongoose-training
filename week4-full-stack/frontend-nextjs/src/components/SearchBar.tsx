"use client";

import { IconSearch } from "@tabler/icons-react";
import SelectList from "./SelectList";
import { searchHandler } from "@/lib/actions";

const options = [
  { id: 1, content: "最新內容", value: "asc" },
  { id: 2, content: "最舊內容", value: "desc" },
];

export default function SearchBar({ className = "" }) {
  return (
    <form
      className={`${className} flex items-center justify-between gap-3`}
      action={searchHandler}
    >
      <SelectList className="w-[30%]" />
      <div className="flex w-[70%] items-center">
        <input
          className="w-full border-2 border-r-0 border-[#000400] py-2 pl-4"
          type="text"
          placeholder="搜尋貼文"
          name="query"
        />
        <button
          className="border-2 border-[#000400] bg-[#03438D] p-2"
          type="submit"
        >
          <IconSearch className="text-white" />
        </button>
      </div>
    </form>
  );
}
