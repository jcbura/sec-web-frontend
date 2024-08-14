"use client";

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
  const opponentRank = homeGame ? nextGame.away_rank : nextGame?.home_rank;

  const teamIcon = getDecodedName(team.name);
  const opponentIcon = getDecodedName(opponent || "");

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
    <div className="w-[95%] md:w-[700px] lg:w-[950px] xl:w-[70%] h-full gap-4 flex flex-col justify-center items-center border bg-white border-neutral-300">
      <div className="w-full h-full gap-0 lg:gap-4 px-8 pt-4 flex justify-between lg:justify-start items-center">
        <div className="text-xl font-bold text-black/50">NEXT GAME</div>
        <div className="text-xl font-bold">{`${date.toUpperCase()} - ${time.toUpperCase()}`}</div>
      </div>
      <div className="w-full h-full gap-4 flex flex-col justify-center items-center">
        <div className="w-3/4 h-full flex justify-center items-center">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <Image
              src={`/teams/${teamIcon}.png`}
              width={200}
              height={200}
              alt={`${teamIcon} icon`}
              className="w-20 h-20"
            />
            <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-2">
              {team.team_rank && (
                <div className="text-lg font-bold">{`No. ${team.team_rank}`}</div>
              )}
              <div className="text-2xl font-bold">
                {team.name.toUpperCase()}
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center text-xl font-bold">
            {nextGame?.neutral_site ? "VS" : homeGame ? "VS" : "AT"}
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <Image
              src={`/teams/${opponentIcon}.png`}
              width={200}
              height={200}
              alt={`${opponentIcon} icon`}
              className="w-20 h-20"
            />
            <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-2">
              {opponentRank && (
                <div className="text-lg font-bold">{`No. ${opponentRank}`}</div>
              )}
              <div className="text-2xl font-bold">
                {opponent?.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 h-full flex justify-between items-center border border-neutral-300 border-t border-b-0 border-l-0 lg:border-l border-r-0 lg:border-r">
        <div className="w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-neutral-300 border-t-0 border-b-0 border-l-0 border-r">
          <div className="text-4xl font-bold">{timeLeft.days}</div>
          <div className="text-sm font-sans text-black/50">Days</div>
        </div>
        <div className="w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-neutral-300 border-t-0 border-b-0 border-l-0 border-r">
          <div className="text-4xl font-bold">{timeLeft.hours}</div>
          <div className="text-sm font-sans text-black/50">Hours</div>
        </div>
        <div className="w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-neutral-300 border-t-0 border-b-0 border-l-0 border-r">
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
