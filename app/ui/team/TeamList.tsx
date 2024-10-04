"use client";

import TeamCard from "./TeamCard";
import { useTeam } from "./TeamContext";

const TeamList = () => {
  const { teams } = useTeam();

  return (
    <section className="w-full h-full flex justify-center items-center bg-white">
      <ol className="list-none w-full h-full gap-4 flex flex-col justify-center items-center">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </ol>
    </section>
  );
};

export default TeamList;
