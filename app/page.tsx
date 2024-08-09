import { fetchGames, fetchNextGame, fetchTeam, fetchTeams } from "./lib/data";
import { Game, NextGame, Team, TeamEnum } from "./lib/definitions";
import GameCard from "./ui/GameCard";

const Home = async () => {
  // const teams: Team[] = await fetchTeams();
  const team: Team = await fetchTeam("alabama");
  // const games: Game[] = await fetchGames();
  // const game: NextGame = await fetchNextGame("alabama");

  return (
    <div className="w-full h-full p-4 gap-4 flex flex-col justify-center items-center">
      <GameCard game={team.games![3]} team={team} />
    </div>
  );
};

export default Home;
