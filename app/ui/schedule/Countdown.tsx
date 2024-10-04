"use client";

import Image from "next/image";
import {
  getDecodedName,
  getTimeUntil,
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

  const [timeLeft, setTimeLeft] = useState(
    getTimeUntil(nextGame?.game_date || "", nextGame?.game_time || "00:00:00")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(
        getTimeUntil(
          nextGame?.game_date || "",
          nextGame?.game_time || "00:00:00"
        )
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [nextGame?.game_date, nextGame?.game_time]);

  return (
    <section className="w-[95%] md:w-[700px] lg:w-[950px] xl:w-[70%] h-full gap-4 flex flex-col justify-center items-center border bg-white border-neutral-300 text-black">
      <div className="w-full h-full lg:gap-4 px-8 pt-4 flex justify-between lg:justify-start items-center">
        <h3 className="text-xl font-bold text-black/50">NEXT GAME</h3>
        <h3 className="text-xl font-bold">{`${date.toUpperCase()} - ${time.toUpperCase()}`}</h3>
      </div>
      <div className="w-3/4 h-full flex justify-center items-center">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image
            src={`/teams/${homeGame ? opponentIcon : teamIcon}.png`}
            width={200}
            height={200}
            alt={`${homeGame ? opponentIcon : teamIcon} icon`}
            className="w-20 h-20"
          />
          <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-2">
            {homeGame && opponentRank ? (
              <h2 className="text-lg font-bold">{`No. ${opponentRank}`}</h2>
            ) : (
              !homeGame &&
              team.team_rank && (
                <h2 className="text-lg font-bold">{`No. ${team.team_rank}`}</h2>
              )
            )}
            <h1 className="text-2xl font-bold">
              {homeGame ? opponent?.toUpperCase() : team.name.toUpperCase()}
            </h1>
          </div>
        </div>
        <h2 className="w-full h-full flex justify-center items-center text-xl font-bold">
          {nextGame?.neutral_site ? "VS" : homeGame ? "VS" : "AT"}
        </h2>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image
            src={`/teams/${homeGame ? teamIcon : opponentIcon}.png`}
            width={200}
            height={200}
            alt={`${homeGame ? teamIcon : opponentIcon} icon`}
            className="w-20 h-20"
          />
          <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-2">
            {homeGame && team.team_rank ? (
              <h2 className="text-lg font-bold">{`No. ${team.team_rank}`}</h2>
            ) : (
              !homeGame &&
              opponentRank && (
                <h2 className="text-lg font-bold">{`No. ${opponentRank}`}</h2>
              )
            )}
            <h1 className="text-2xl font-bold">
              {homeGame ? team.name.toUpperCase() : opponent?.toUpperCase()}
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 h-full flex justify-between items-center border border-neutral-300 border-t border-b-0 border-l-0 lg:border-l border-r-0 lg:border-r">
        <div className="w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-neutral-300 border-t-0 border-b-0 border-l-0 border-r">
          <h2 className="text-4xl font-bold">{timeLeft.days}</h2>
          <p className="text-sm font-sans text-black/50">Days</p>
        </div>
        <div className="w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-neutral-300 border-t-0 border-b-0 border-l-0 border-r">
          <h2 className="text-4xl font-bold">{timeLeft.hours}</h2>
          <p className="text-sm font-sans text-black/50">Hours</p>
        </div>
        <div className="w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-neutral-300 border-t-0 border-b-0 border-l-0 border-r">
          <h2 className="text-4xl font-bold">{timeLeft.minutes}</h2>
          <p className="text-sm font-sans text-black/50">Minutes</p>
        </div>
        <div className="w-full h-full gap-2 p-4 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold">{timeLeft.seconds}</h2>
          <p className="text-sm font-sans text-black/50">Seconds</p>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
