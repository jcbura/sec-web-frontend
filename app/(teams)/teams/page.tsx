import { fetchSECCGame, fetchTeams, searchTeam } from "@/app/lib/data";
import { Game, Team } from "@/app/lib/definitions";
import BottomBar from "@/app/ui/BottomBar";
import NavBar from "@/app/ui/NavBar";
import TeamsComponent from "@/app/ui/team/TeamsComponent";

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    search?: string;
  };
}) => {
  const searchTeams: Team[] = await searchTeam(searchParams?.search || "");
  const game: Game = await fetchSECCGame();

  const alpha: Team[] = await fetchTeams("alpha");
  const rank: Team[] = await fetchTeams("rank");
  const record: Team[] = await fetchTeams("record");

  return (
    <div className="w-full h-full flex flex-col gap-8 bg-white">
      <NavBar teams={searchTeams} />
      <TeamsComponent game={game} alpha={alpha} rank={rank} record={record} />
      <BottomBar />
    </div>
  );
};

export default Page;
