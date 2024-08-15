import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import SearchWrapper from "./search/SearchWrapper";
import { Team } from "../lib/definitions";
import { getDecodedName, isMobile } from "../lib/scripts";
import { headers } from "next/headers";

interface Props {
  team?: Team;
  teams: Team[];
  isMobile: boolean;
}

const NavBar = ({ team, teams, isMobile }: Props) => {
  const clsxBgObj = {
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
    "bg-sec-primary": !team,
  };

  const clsxTextObj = {
    "text-white":
      team?.name === "Alabama" ||
      team?.name === "Arkansas" ||
      team?.name === "Georgia" ||
      team?.name === "Kentucky" ||
      team?.name === "Mississippi State" ||
      team?.name === "Missouri" ||
      team?.name === "Oklahoma" ||
      team?.name === "South Carolina" ||
      team?.name === "Tennessee" ||
      team?.name === "Texas" ||
      team?.name === "Texas A&M" ||
      team?.name === "Vanderbilt",
    "text-auburn-secondary": team?.name === "Auburn",
    "text-florida-secondary": team?.name === "Florida",
    "text-lsu-secondary": team?.name === "LSU",
    "text-ole-miss-secondary": team?.name === "Ole Miss",
    "text-sec-secondary": !team,
  };

  return (
    <div className="sticky top-0 w-full h-full flex flex-col justify-center items-start shadow-md">
      <div
        className={clsx(
          "w-full h-20 px-8 py-4 gap-2 flex justify-start items-center",
          clsxBgObj
        )}
      >
        {!isMobile ? (
          <>
            <div className="flex-1 h-full flex justify-start items-center text-4xl text-white font-bold">
              {!team
                ? "Southeastern Conference"
                : `${team.name} ${team.mascot}`}
            </div>
            <Image
              src={
                team
                  ? `/sec/white/${getDecodedName(team.name)}.png`
                  : "/sec/sec.png"
              }
              width={62}
              height={62}
              style={{ objectFit: "contain" }}
              alt={`${team?.name} icon`}
              className="hidden md:flex w-12 h-12"
            />
          </>
        ) : (
          <div className="flex-1 h-full flex justify-start items-center text-2xl text-white font-bold">
            {!team ? "Southeastern Conference" : `${team.name} ${team.mascot}`}
          </div>
        )}
      </div>
      <div className="w-full h-full px-8 p-4 flex justify-start items-center bg-white shadow-md">
        <div className="flex-1 h-full">
          <Link
            href={`/teams`}
            className={clsx("text-2xl font-bold", {
              "hover:text-blue-500": !isMobile,
            })}
            scroll={!team ? false : true}
          >
            Teams
          </Link>
        </div>
        <div className="w-[250px] h-full hidden md:flex justify-center items-center">
          <SearchWrapper teams={teams} isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
