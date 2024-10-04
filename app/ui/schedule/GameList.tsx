import GameCard from "./GameCard";
import { Game, Team } from "@/app/lib/definitions";

interface Props {
  team: Team;
}

const GameList = ({ team }: Props) => {
  const games: Game[] = team.games || [];

  return (
    <section className="w-full h-full flex justify-center items-center bg-white">
      <ol className="list-none w-full h-full gap-4 flex flex-col justify-center items-center">
        {games.map((game) => (
          <GameCard key={game.id} game={game} team={team} />
        ))}
      </ol>
    </section>
  );
};

export default GameList;
