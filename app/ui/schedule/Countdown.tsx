"use client";

import clsx from "clsx";
import Image from "next/image";
import {
  getDecodedName,
  getTimeUntill,
  formatDate,
  formatTime,
} from "@/app/lib/scripts";
import { NextGame, Team } from "@/app/lib/definitions";
import { useEffect, useState } from "react";

interface Props {
  game: NextGame;
  team: Team;
}

const Countdown = ({ game, team }: Props) => {
  const nextGame = game.next_game;
  const [date] = formatDate(nextGame?.game_date || "", "short");
  const time = formatTime(nextGame?.game_time || "");

  const homeGame = nextGame?.home_team === team.name;
  const opponent = homeGame ? nextGame.away_team : nextGame?.home_team;

  const teamIcon = getDecodedName(team.name);
  const opponentIcon = getDecodedName(opponent || "");

  const clsxBgObj = {
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

  const clsxBorderPrimaryObj = {
    "border-alabama": team.name === "Alabama",
    "border-arkansas": team.name === "Arkansas",
    "border-auburn-primary": team.name === "Auburn",
    "border-florida-primary": team.name === "Florida",
    "border-georgia": team.name === "Georgia",
    "border-kentucky": team.name === "Kentucky",
    "border-lsu-primary": team.name === "LSU",
    "border-mississippi-state": team.name === "Mississippi State",
    "border-missouri": team.name === "Missouri",
    "border-oklahoma": team.name === "Oklahoma",
    "border-ole-miss-primary": team.name === "Ole Miss",
    "border-south-carolina": team.name === "South Carolina",
    "border-tennessee-primary": team.name === "Tennessee",
    "border-texas": team.name === "Texas",
    "border-texas-a&m": team.name === "Texas A&M",
    "border-vanderbilt": team.name === "Vanderbilt",
  };

  const [isMounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(
    getTimeUntill(nextGame?.game_date || "", nextGame?.game_time || "00:00:00")
  );

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setTimeLeft(
        getTimeUntill(
          nextGame?.game_date || "",
          nextGame?.game_time || "00:00:00"
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [nextGame?.game_date, nextGame?.game_time]);

  return (
    <div
      className={clsx(
        "w-[95%] md:w-[700px] lg:w-[950px] xl:w-[70%] h-full gap-4 flex flex-col justify-center items-center border",
        clsxBorderPrimaryObj
      )}
    >
      <div className="w-full h-full gap-0 lg:gap-4 px-8 pt-4 flex justify-between lg:justify-start items-center">
        <div className="text-xl font-bold text-black/50">NEXT GAME</div>
        <div className="text-xl font-bold">{`${date.toUpperCase()} - ${time.toUpperCase()}`}</div>
      </div>
      <div className="w-full h-full gap-4 flex flex-col justify-center items-center">
        <div className="w-3/4 h-full flex justify-center items-center">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <Image
              src={`/team-icons/${teamIcon}.png`}
              width={72}
              height={72}
              alt={`${teamIcon} icon`}
              className="w-22 h-22"
            />
            <div className="hidden lg:flex lg:justify-center lg:items-center text-2xl font-bold">
              {team.name.toUpperCase()}
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center text-xl font-bold">
            {nextGame?.neutral_site ? "VS" : homeGame ? "VS" : "AT"}
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <Image
              src={`/team-icons/${opponentIcon}.png`}
              width={72}
              height={72}
              alt={`${opponentIcon} icon`}
              className="w-22 h-22"
            />
            <div className="hidden lg:flex lg:justify-center lg:items-center text-2xl font-bold">
              {opponent?.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "w-full lg:w-2/3 h-full flex justify-between items-center border border-t border-b-0 border-l-0 lg:border-l border-r-0 lg:border-r",
          {
            "border-alabama bg-alabama/10": team.name === "Alabama",
            "border-arkansas bg-arkansas/10": team.name === "Arkansas",
            "border-auburn-primary bg-auburn-primary/10":
              team.name === "Auburn",
            "border-florida-primary bg-florida-primary/10":
              team.name === "Florida",
            "border-georgia bg-georgia/10": team.name === "Georgia",
            "border-kentucky bg-kentucky/10": team.name === "Kentucky",
            "border-lsu-primary bg-lsu-primary/10": team.name === "LSU",
            "border-mississippi-state bg-mississippi-state/10":
              team.name === "Mississippi State",
            "border-missouri bg-missouri/10": team.name === "Missouri",
            "border-oklahoma bg-oklahoma/10": team.name === "Oklahoma",
            "border-ole-miss-primary bg-ole-miss-primary/10":
              team.name === "Ole Miss",
            "border-south-carolina bg-south-carolina/10":
              team.name === "South Carolina",
            "border-tennessee-primary bg-tennessee-primary/10":
              team.name === "Tennessee",
            "border-texas bg-texas/10": team.name === "Texas",
            "border-texas-a&m bg-texas-a&m/10": team.name === "Texas A&M",
            "border-vanderbilt bg-vanderbilt/10": team.name === "Vanderbilt",
          }
        )}
      >
        <div
          className={clsx(
            "w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-t-0 border-b-0 border-l-0 border-r",
            clsxBorderPrimaryObj
          )}
        >
          <div className="text-4xl font-bold">{timeLeft.days}</div>
          <div className="text-sm font-sans text-black/50">Days</div>
        </div>
        <div
          className={clsx(
            "w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-t-0 border-b-0 border-l-0 border-r",
            clsxBorderPrimaryObj
          )}
        >
          <div className="text-4xl font-bold">{timeLeft.hours}</div>
          <div className="text-sm font-sans text-black/50">Hours</div>
        </div>
        <div
          className={clsx(
            "w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-t-0 border-b-0 border-l-0 border-r",
            clsxBorderPrimaryObj
          )}
        >
          <div className="text-4xl font-bold">{timeLeft.minutes}</div>
          <div className="text-sm font-sans text-black/50">Minutes</div>
        </div>
        <div className="w-full h-full gap-2 p-4 flex flex-col justify-center items-center">
          <div className="text-4xl font-bold">{timeLeft.seconds}</div>
          <div className="text-sm font-sans text-black/50">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
