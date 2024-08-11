import { Game, Team } from "@/app/lib/definitions";
import TeamList from "./TeamList";
import SortBar from "./SortBar";
import SECCountdown from "./SECCountdown";

interface Props {
  game: Game;
  alpha: Team[];
  rank: Team[];
  record: Team[];
}

const TeamsComponent = ({ game, alpha, rank, record }: Props) => {
  return (
    <div className="w-full h-full gap-8 flex flex-col justify-center items-center bg-white">
      <SECCountdown game={game} />
      <SortBar />
      <TeamList teams={alpha} />
    </div>
  );
};

export default TeamsComponent;
