import { NextGame, Team } from "@/app/lib/definitions";
import Countdown from "./Countdown";
import GameList from "./GameList";
import Record from "./Record";

interface Props {
  game: NextGame;
  team: Team;
}

const Schedule = ({ game, team }: Props) => {
  return (
    <div className="w-full h-full gap-8 py-4 flex flex-col justify-center items-center bg-white dark:bg-neutral-950">
      <Countdown game={game} team={team} />
      <Record team={team} />
      <GameList team={team} />
    </div>
  );
};

export default Schedule;
