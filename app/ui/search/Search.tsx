"use client";

import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { getDecodedName } from "@/app/lib/scripts";
import { useEffect, useRef } from "react";
import { useSearch } from "./SearchContext";
import { usePathname } from "next/navigation";
import { Team } from "@/app/lib/definitions";

interface Props {
  teams: Team[];
}

const Search = ({ teams }: Props) => {
  const searchRef = useRef<HTMLDivElement>(null);
  const { input, setInput } = useSearch();
  const pathname = usePathname();

  const handleClickOutside = (e: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
      setInput("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={searchRef}
      className="w-full flex flex-col justify-center items-start"
    >
      <SearchBar />
      <div className="relative w-full flex flex-col justify-center items-start">
        {teams.length > 0 && (
          <div className="absolute top-full mt-2 px-2 w-full max-h-[265px] overflow-y-auto justify-center items-start bg-white shadow-md rounded-md">
            {teams.map((team) => (
              <Link
                key={team.id}
                href={`/teams/${getDecodedName(team.name)}`}
                className="px-2 py-1 gap-2 my-2 flex justify-start items-center bg-white hover:bg-neutral-50 text-black hover:text-blue-500 focus:bg-neutral-50 focus:text-blue-500 rounded-md"
                onClick={() => {
                  if (pathname === `/teams/${getDecodedName(team.name)}`) {
                    setInput("");
                  }
                }}
              >
                <Image
                  src={`/team-icons/${getDecodedName(team.name)}.png`}
                  width={72}
                  height={72}
                  alt={`${getDecodedName(team.name)}`}
                  className="w-8 h-8"
                />
                <div className="w-full flex flex-col justify-center items-start">
                  <div className="text-lg font-bold">{team.name}</div>
                  <div className="text-sm text-black/50 font-sans">
                    {team.mascot}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
