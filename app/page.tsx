import {
  getNextGameArray,
  fetchSECCGame,
  fetchTeams,
  searchTeam,
} from "@/app/lib/data";
import { Game, NextGame, Team } from "@/app/lib/definitions";
import BottomBar from "@/app/ui/BottomBar";
import NavBar from "@/app/ui/NavBar";
import TeamsComponent from "@/app/ui/team/TeamsComponent";
import { headers } from "next/headers";
import { isMobile } from "@/app/lib/scripts";

const Home = async ({
  searchParams,
}: {
  searchParams?: {
    search?: string;
  };
}) => {
  const userAgent = headers().get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);

  const searchTeams: Team[] = await searchTeam(searchParams?.search || "");
  const game: Game = await fetchSECCGame();

  const alphaTeams: Team[] = await fetchTeams("alpha");
  const alpha: NextGame[] = await getNextGameArray(alphaTeams);

  const rankTeams: Team[] = await fetchTeams("rank");
  const rank: NextGame[] = await getNextGameArray(rankTeams);

  const recordTeams: Team[] = await fetchTeams("record");
  const record: NextGame[] = await getNextGameArray(recordTeams);

  return (
    <div className="w-full h-full flex flex-col gap-8 bg-white">
      <NavBar teams={searchTeams} isMobile={mobileCheck} />
      <TeamsComponent
        game={game}
        alpha={alpha}
        rank={rank}
        record={record}
        isMobile={mobileCheck}
      />
      <BottomBar />
    </div>
  );
};

export default Home;
