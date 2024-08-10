import clsx from "clsx";

import Link from "next/link";
import { Team } from "../lib/definitions";

interface Props {
  team?: Team;
}

const NavBar = ({ team }: Props) => {
  const clsxObj = {
    "bg-alabama": team?.name === "Alabama",
    "bg-arkansas": team?.name === "Arkansas",
    "bg-auburn-primary": team?.name === "Auburn",
    "bg-florida-primary": team?.name === "Florida",
    "bg-georgia": team?.name === "Georgia",
    "bg-kentucky": team?.name === "Kentucky",
    "bg-lsu-primary": team?.name === "LSU",
    "bg-mississippi-state": team?.name === "Mississippi State",
    "bg-missouri": team?.name === "Missouri",
    "bg-oklahoma": team?.name === "Oklahoma",
    "bg-ole-miss-primary": team?.name === "Ole Miss",
    "bg-south-carolina": team?.name === "South Carolina",
    "bg-tennessee-primary": team?.name === "Tennessee",
    "bg-texas": team?.name === "Texas",
    "bg-texas-a&m": team?.name === "Texas A&M",
    "bg-vanderbilt": team?.name === "Vanderbilt",
  };

  return (
    <div className="sticky top-0 w-full h-full flex flex-col justify-center items-start bg-sec">
      <div
        className={clsx(
          "w-full h-20 px-8 py-4 flex justify-start items-center",
          clsxObj
        )}
      >
        <div className="flex-1 text-4xl text-white font-bold">
          {!team ? "Southeastern Conference" : `${team?.name} ${team?.mascot}`}
        </div>
        <div className="w-[250px] h-8 hidden md:flex justify-center items-center bg-white border border-neutral-300 rounded-xl"></div>
      </div>
      <div className="w-full h-16 px-8 py-4 flex justify-start items-center bg-white shadow-md">
        <Link href={`/teams`} className="text-2xl font-bold" scroll={!team}>
          Teams
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
