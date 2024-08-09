import { fetchGames, fetchNextGame, fetchTeam, fetchTeams } from "./lib/data";
import { NextGame, Team } from "./lib/definitions";
import Schedule from "./ui/schedule/Schedule";

const Home = async () => {
  const teamName = "alabama";

  const team: Team = await fetchTeam(teamName);
  const game: NextGame = await fetchNextGame(teamName);

  return (
    <div className="py-4">
      <Schedule game={game} team={team} />
    </div>
  );
};

export default Home;
