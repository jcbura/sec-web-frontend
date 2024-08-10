import NavBar from "@/app/ui/NavBar";
import Schedule from "@/app/ui/schedule_plain/Schedule";
import { fetchNextGame, fetchTeam, searchTeam } from "@/app/lib/data";
import { NextGame, Team, TeamEnum } from "@/app/lib/definitions";

const Page = async ({
  params,
  searchParams,
}: {
  params: { team: TeamEnum };
  searchParams?: {
    search?: string;
  };
}) => {
  const team: Team = await fetchTeam(params.team);
  const game: NextGame = await fetchNextGame(params.team);

  const teams: Team[] = await searchTeam(searchParams?.search || "");

  return (
    <div className="w-full h-full flex flex-col gap-8 bg-white">
      <NavBar team={team} teams={teams} />
      <Schedule game={game} team={team} />
    </div>
  );
};

export default Page;
