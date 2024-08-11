import TeamCard from "./TeamCard";
import { Team } from "@/app/lib/definitions";

interface Props {
  teams: Team[];
}

const TeamList = ({ teams }: Props) => {
  return (
    <div className="w-full h-full gap-4 flex flex-col justify-center items-center bg-white">
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
};

export default TeamList;
