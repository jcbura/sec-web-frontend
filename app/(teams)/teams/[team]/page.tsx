import { fetchNextGame, fetchTeam } from "@/app/lib/data";
import { NextGame, Team, TeamEnum } from "@/app/lib/definitions";
import Schedule from "@/app/ui/schedule_plain/Schedule";
// import Schedule from "@/app/ui/schedule/Schedule";

const Page = async ({ params }: { params: { team: TeamEnum } }) => {
  const team: Team = await fetchTeam(params.team);
  const game: NextGame = await fetchNextGame(params.team);

  return (
    <div className="bg-white">
      <Schedule game={game} team={team} />
    </div>
  );

  // return (
  //   <div className="bg-white dark:bg-neutral-950">
  //     <Schedule game={game} team={team} />
  //   </div>
  // );
};

export default Page;
