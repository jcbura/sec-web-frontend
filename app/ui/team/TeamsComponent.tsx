import { Game, NextGame } from "@/app/lib/definitions";
import TeamList from "./TeamList";
import SortBar from "./SortBar";
import SECCountdown from "./SECCountdown";
import { TeamProvider } from "./TeamContext";

interface Props {
  game: Game;
  alpha: NextGame[];
  rank: NextGame[];
  record: NextGame[];
  isMobile: boolean;
}

const TeamsComponent = ({ game, alpha, rank, record, isMobile }: Props) => {
  return (
    <div className="w-full h-full gap-8 flex flex-col justify-center items-center bg-white">
      <SECCountdown game={game} />
      <TeamProvider defaultTeams={alpha}>
        <SortBar
          alpha={alpha}
          rank={rank}
          record={record}
          isMobile={isMobile}
        />
        <TeamList />
      </TeamProvider>
    </div>
  );
};

export default TeamsComponent;
