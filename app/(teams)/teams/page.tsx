import { searchTeam } from "@/app/lib/data";
import { Team } from "@/app/lib/definitions";
import NavBar from "@/app/ui/NavBar";

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    search?: string;
  };
}) => {
  const teams: Team[] = await searchTeam(searchParams?.search || "");

  return (
    <div className="w-full h-full flex flex-col gap-8 bg-white">
      <NavBar teams={teams} />
    </div>
  );
};

export default Page;
