import NavBar from "@/app/ui/NavBar";
import Schedule from "@/app/ui/schedule/Schedule";
import { fetchNextGame, fetchTeam, searchTeam } from "@/app/lib/data";
import { NextGame, Team, TeamEnum } from "@/app/lib/definitions";
import BottomBar from "@/app/ui/BottomBar";
import { headers } from "next/headers";
import { isMobile } from "@/app/lib/scripts";

const Page = async ({
  params,
  searchParams,
}: {
  params: { team: TeamEnum };
  searchParams?: {
    search?: string;
  };
}) => {
  const userAgent = headers().get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);

  const team: Team = await fetchTeam(params.team);
  const game: NextGame = await fetchNextGame(params.team);

  const teams: Team[] = await searchTeam(searchParams?.search || "");

  return (
    <div className="w-full h-full flex flex-col gap-8 bg-white">
      <NavBar team={team} teams={teams} isMobile={mobileCheck} />
      <Schedule game={game} team={team} />
      <BottomBar team={team} />
    </div>
  );
};

export default Page;
