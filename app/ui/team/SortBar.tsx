"use client";

import clsx from "clsx";
import { NextGame } from "@/app/lib/definitions";
import { useTeam } from "./TeamContext";

interface Props {
  alpha: NextGame[];
  rank: NextGame[];
  record: NextGame[];
  isMobile: boolean;
}

const SortBar = ({ alpha, rank, record, isMobile }: Props) => {
  const { teams, setTeams } = useTeam();

  return (
    <section className="w-[95%] md:w-[700px] lg:w-[950px] xl:w-[70%] h-full flex flex-row justify-center items-center border bg-white border-neutral-300 text-black">
      <div className="w-1/3 h-full p-4 flex justify-center items-center border border-neutral-300 border-t-0 border-b-0 border-l-0 border-r">
        <button
          className={clsx("hidden lg:flex text-2xl font-bold", {
            "text-blue-500":
              teams === alpha || (teams !== rank && teams !== record),
            "hover:text-blue-500": !isMobile,
          })}
          onClick={() => setTeams(alpha)}
        >
          ALPHABETICAL
        </button>
        <button
          className={clsx("lg:hidden flex text-2xl font-bold", {
            "text-blue-500":
              teams === alpha || (teams !== rank && teams !== record),
            "hover:text-blue-500": !isMobile,
          })}
          onClick={() => setTeams(alpha)}
        >
          ALPHA.
        </button>
      </div>
      <div className="w-1/3 h-full p-4 flex justify-center items-center border border-neutral-300 border-t-0 border-b-0 border-l-0 border-r">
        <button
          className={clsx("flex text-2xl font-bold", {
            "text-blue-500": teams === rank,
            "hover:text-blue-500": !isMobile,
          })}
          onClick={() => setTeams(rank)}
        >
          RANK
        </button>
      </div>
      <div className="w-1/3 h-full p-4 flex justify-center items-center border border-t-0 border-b-0 border-l-0 border-r-0">
        <button
          className={clsx("flex text-2xl font-bold", {
            "text-blue-500": teams === record,
            "hover:text-blue-500": !isMobile,
          })}
          onClick={() => setTeams(record)}
        >
          RECORD
        </button>
      </div>
    </section>
  );
};

export default SortBar;
