"use client";

import TeamCard from "./TeamCard";
import { useTeam } from "./TeamContext";

const TeamList = () => {
  const { teams } = useTeam();

  return (
    <div className="w-full h-full gap-4 flex flex-col justify-center items-center bg-white">
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
};

export default TeamList;
