import { fetchGames, fetchNextGame, fetchTeam, fetchTeams } from "./lib/data";
import { Game, NextGame, Team } from "./lib/definitions";
import GameList from "./ui/schedule/GameList";

const Home = async () => {
  // const teams: Team[] = await fetchTeams();
  const team: Team = await fetchTeam("vanderbilt");
  // const games: Game[] = await fetchGames();
  // const game: NextGame = await fetchNextGame("alabama");

  return (
    <div className="w-full h-full justify-center items-center">
      <GameList team={team} />
    </div>
  );
};

export default Home;
