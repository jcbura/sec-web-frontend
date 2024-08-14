"use client";

import Image from "next/image";
import { Game } from "@/app/lib/definitions";
import { formatDate, formatTime, getTimeUntill } from "@/app/lib/scripts";
import { useEffect, useState } from "react";

interface Props {
  game: Game;
}

const SECCountdown = ({ game }: Props) => {
  const [date] = formatDate(game.game_date || "", "short");
  const time = formatTime(game.game_time || "");

  const [isMounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(
    getTimeUntill(game.game_date || "", game.game_time || "00:00:00")
  );

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setTimeLeft(
        getTimeUntill(game.game_date || "", game.game_time || "00:00:00")
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [game.game_date, game.game_time]);

  return (
    <div className="w-[95%] md:w-[700px] lg:w-[950px] xl:w-[70%] h-full gap-4 flex flex-col justify-center items-center border bg-white border-neutral-300">
      <div className="w-full h-full gap-0 lg:gap-4 px-8 pt-4 flex justify-between lg:justify-start items-center">
        <div className="text-xl font-bold text-black/50">SECCG</div>
        <div className="text-xl font-bold">{`${date.toUpperCase()} - ${time.toUpperCase()}`}</div>
      </div>
      <div className="w-full h-full gap-4 flex flex-col justify-center items-center">
        <div className="w-full h-full flex justify-center items-center text-4xl font-bold">
          <div className="w-full h-full gap-2 flex flex-col justify-center items-center">
            <Image
              src={`/sec/sec.png`}
              width={62}
              height={62}
              alt="sec icon"
              className="w-22 h-22"
            />
            <div className="text-4xl font-bold">SEC CHAMPIONSHIP GAME</div>
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

export default SECCountdown;
