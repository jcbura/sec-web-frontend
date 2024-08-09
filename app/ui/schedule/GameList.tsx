import GameCard from "./GameCard";
import { Game, Team } from "@/app/lib/definitions";

interface Props {
  team: Team;
}

const GameList = ({ team }: Props) => {
  const games: Game[] = team.games || [];

  return (
    <div className="w-full h-full py-4 gap-4 flex flex-col justify-center items-center bg-white">
      {games.map((game) => (
        <GameCard key={game.id} game={game} team={team} />
      ))}
    </div>
  );
};

export default GameList;
