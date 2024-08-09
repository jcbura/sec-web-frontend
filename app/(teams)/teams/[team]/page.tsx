import { fetchNextGame, fetchTeam } from "@/app/lib/data";
import { NextGame, Team, TeamEnum } from "@/app/lib/definitions";
import NavBar from "@/app/ui/NavBar";
import Schedule from "@/app/ui/schedule_plain/Schedule";

const Page = async ({ params }: { params: { team: TeamEnum } }) => {
  const team: Team = await fetchTeam(params.team);
  const game: NextGame = await fetchNextGame(params.team);

  return (
    <div className="w-full h-full flex flex-col gap-8 bg-white">
      <NavBar team={team} />
      <Schedule game={game} team={team} />
    </div>
  );
};

export default Page;
