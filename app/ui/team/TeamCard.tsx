"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { NextGame, Team, TeamEnum } from "@/app/lib/definitions";
import { getDecodedName, formatDate, formatTime } from "@/app/lib/scripts";
import { fetchNextGame } from "@/app/lib/data";

interface Props {
  team: NextGame;
}

const TeamCard = ({ team }: Props) => {
  const teamName = getDecodedName(team.name);
  const game = team.next_game;

  const [date, day] = formatDate(game?.game_date || "", "short");
  const time = formatTime(game?.game_time || "");

  const clsxObj = {
    "bg-alabama": team.name === "Alabama",
    "bg-arkansas": team.name === "Arkansas",
    "bg-auburn-primary": team.name === "Auburn",
    "bg-florida-primary": team.name === "Florida",
    "bg-georgia": team.name === "Georgia",
    "bg-kentucky": team.name === "Kentucky",
    "bg-lsu-primary": team.name === "LSU",
    "bg-mississippi-state": team.name === "Mississippi State",
    "bg-missouri": team.name === "Missouri",
    "bg-oklahoma": team.name === "Oklahoma",
    "bg-ole-miss-primary": team.name === "Ole Miss",
    "bg-south-carolina": team.name === "South Carolina",
    "bg-tennessee-primary": team.name === "Tennessee",
    "bg-texas": team.name === "Texas",
    "bg-texas-a&m": team.name === "Texas A&M",
    "bg-vanderbilt": team.name === "Vanderbilt",
  };

  return (
    <div className="w-[95%] md:w-[700px] lg:w-[950px] xl:w-[70%] h-full flex flex-col justify-center items-center bg-white text-black">
      <div
        className={clsx(
          "w-full h-12 flex lg:hidden justify-center items-center text-lg font-bold text-white border border-t border-b-0 border-l border-r border-transparent",
          clsxObj
        )}
      >
        <div>{team.team_rank ? `No. ${team.team_rank}` : "UNRANKED"}</div>
      </div>
      <div className="w-full h-full lg:h-24 flex justify-center items-center">
        <div className="w-full h-full lg:h-24 flex justify-center items-center">
          <div
            className={clsx(
              "w-28 h-full hidden lg:flex lg:flex-row justify-center items-center text-lg font-bold text-white border border-t border-b-0 border-l border-r-0 border-transparent",
              clsxObj
            )}
          >
            <div>{team.team_rank ? `No. ${team.team_rank}` : "UNRANKED"}</div>
          </div>
          <div className="w-full h-full p-4 gap-4 flex flex-col lg:flex-row justify-center lg:justiy-start items-center border border-neutral-300 border-t-0 lg:border-t border-b-0 border-l lg:border-l-0 border-r">
            <div className="gap-4 flex-[3_3_0%] flex flex-col lg:flex-row justify-center lg:justify-start items-center">
              <Link
                href={`/teams/${teamName}`}
                className="gap-4 flex justify-center items-center"
              >
                <Image
                  src={`/teams/${teamName}.png`}
                  width={200}
                  height={200}
                  alt={`${getDecodedName(teamName)} icon`}
                  className="w-16 h-16"
                />
              </Link>
              <Link
                href={`/teams/${teamName}`}
                className="flex flex-col justify-center items-center lg:items-start"
              >
                <div className="text-2xl font-bold">
                  {team.name.toUpperCase()}
                </div>
                <div className="text-sm font-sans text-black/50">
                  {team.mascot}
                </div>
              </Link>
            </div>
            <div className="flex-[2_2_0%] flex flex-col justify-center items-center lg:items-start">
              <div className="text-2xl font-bold">
                {`${day} ${date} ${time}`.toUpperCase()}
              </div>
              <div className="text-sm font-sans text-black/50">Next Game</div>
            </div>
            <div className="flex-[2_2_0%] h-full gap-8 flex justify-center  items-center">
              <div className="flex flex-col justify-start items-center">
                <div className="text-4xl text-green-500 font-bold">
                  {team.total_wins}
                </div>
                <div className="text-sm font-sans text-black/50">Wins</div>
              </div>
              <div className="flex flex-col justify-start items-center">
                <div className="text-4xl text-red-500 font-bold">
                  {team.total_losses}
                </div>
                <div className="text-sm font-sans text-black/50">Losses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-12 w-full px-7 py-2.5 flex justify-center lg:justify-end items-center bg-neutral-300 border border-neutral-300 border-t border-b border-l border-r">
        <Link href="/teams" scroll={false}>
          <Image
            src={`/sec/base/${teamName}.png`}
            width={62}
            height={62}
            alt={`${teamName} sec icon`}
            className="w-8 h-8"
          />
        </Link>
      </div>
    </div>
  );
};

export default TeamCard;
