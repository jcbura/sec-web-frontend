import { fetchGames, fetchNextGame, fetchTeam, fetchTeams } from "./lib/data";
import { Game, NextGame, Team, TeamEnum } from "./lib/definitions";

const Home = async () => {
  const teams: [Team] = await fetchTeams();
  const team: Team = await fetchTeam("alabama");
  const games: [Game] = await fetchGames();
  const game: NextGame = await fetchNextGame("alabama");

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      Home
    </div>
  );
};

export default Home;
