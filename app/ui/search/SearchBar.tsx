"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useEffect, useRef } from "react";
import { useSearch } from "./SearchContext";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { input, setInput } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = useDebouncedCallback((search) => {
    console.log(`Searching... ${search}`);

    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 0);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setInput("");
      inputRef.current?.blur();
    }
  };

  useEffect(() => {
    handleSearch(input);
  }, [input]);

  return (
    <div className="relative w-full h-full flex justify-start items-center">
      <input
        className="w-full h-full pl-10 pr-4 py-2 flex justify-start items-center bg-white border border-neutral-300 text-md font-sans text-black/50 focus:outline-none focus:ring focus:ring-blue-500 rounded-md"
        ref={inputRef}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        value={input}
      />
      <MagnifyingGlassIcon className="absolute h-[18px] w-[18px] ml-3 text-black/50" />
    </div>
  );
};

export default SearchBar;
