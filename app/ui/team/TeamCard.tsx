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

  const homeGame = team.name === game?.home_team;

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
    <li className="w-[95%] md:w-[700px] lg:w-[950px] xl:w-[70%] h-full flex flex-col justify-center items-center bg-white text-black">
      <div
        className={clsx(
          "w-full h-12 flex lg:hidden justify-center items-center text-lg font-bold text-white border border-t border-b-0 border-l border-r border-transparent",
          clsxObj
        )}
      >
        <h2>{team.team_rank ? `No. ${team.team_rank}` : "UNRANKED"}</h2>
      </div>
      <div className="w-full h-full lg:h-24 flex justify-center items-center">
        <div
          className={clsx(
            "w-28 h-full hidden lg:flex lg:flex-row justify-center items-center text-lg font-bold text-white border border-t border-b-0 border-l border-r-0 border-transparent",
            clsxObj
          )}
        >
          <h2>{team.team_rank ? `No. ${team.team_rank}` : "UNRANKED"}</h2>
        </div>
        <div className="w-full h-full p-4 gap-4 flex flex-col lg:flex-row justify-center lg:justiy-start items-center border border-neutral-300 border-t-0 lg:border-t border-b-0 border-l lg:border-l-0 border-r">
          <nav className="gap-4 flex-[3_3_0%] flex flex-col lg:flex-row justify-center lg:justify-start items-center">
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
              <h2 className="text-2xl font-bold">{team.name.toUpperCase()}</h2>
              <p className="text-sm font-sans text-black/50">{team.mascot}</p>
            </Link>
          </nav>
          <div className="flex-[2_2_0%] flex flex-col justify-center items-center lg:items-start">
            <h2 className="text-2xl font-bold">
              {`${day.toUpperCase()} ${date.toUpperCase()} - ${time.toUpperCase()}`}
            </h2>
            <p className="text-sm font-sans text-black/50">
              {homeGame
                ? `${game.away_team} ${game.away_mascot}`
                : `${game?.home_team} ${game?.home_mascot}`}
            </p>
          </div>
          <h2 className="flex-[2_2_0%] flex justify-center items-center text-4xl font-bold">
            {`${team.total_wins} - ${team.total_losses}`}
          </h2>
        </div>
      </div>
      <nav className="h-12 w-full px-7 py-2.5 flex justify-center lg:justify-end items-center bg-neutral-300 border border-neutral-300 border-t border-b border-l border-r">
        <Link href="/teams" scroll={false}>
          <Image
            src={`/sec/base/${teamName}.png`}
            width={62}
            height={62}
            alt={`${teamName} sec icon`}
            className="w-8 h-8"
          />
        </Link>
      </nav>
    </li>
  );
};

export default TeamCard;
