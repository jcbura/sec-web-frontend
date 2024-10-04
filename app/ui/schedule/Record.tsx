import clsx from "clsx";
import { Team } from "@/app/lib/definitions";

interface Props {
  team: Team;
}

const Record = ({ team }: Props) => {
  const totalPercentage =
    (team.total_wins || 0) /
    ((team.total_wins || 0) + (team.total_losses || 0));
  const conferencePercentage =
    (team.conference_wins || 0) /
    ((team.conference_wins || 0) + (team.conference_losses || 0));

  return (
    <section className="w-[95%] md:w-[700px] lg:w-[950px] xl:w-[70%] h-full flex flex-col md:flex-row justify-center items-center border bg-white border-neutral-300 text-black">
      <div className="flex-[2_2_0%] w-full h-full flex justify-center items-center">
        <div className="flex-1 w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-neutral-300 border-t-0 border-b md:border-b-0 border-l-0 border-r">
          <h3 className="text-2xl font-bold">
            {`${team.total_wins} - ${team.total_losses}`}
          </h3>
          <p className="text-sm font-sans text-black/50">Overall</p>
        </div>
        <div className="flex-1 w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-neutral-300 border-t-0 border-b md:border-b-0 border-l-0 border-r-0 md:border-r">
          <h3 className="text-2xl font-bold">{`${
            totalPercentage ? totalPercentage.toFixed(3) : "0.000"
          }`}</h3>
          <p className="text-sm font-sans text-black/50">Percentage</p>
        </div>
      </div>
      <div className="flex-[2_2_0%] w-full h-full flex justify-center items-center">
        <div className="flex-1 w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-neutral-300 border-t-0 border-b md:border-b-0 border-l-0 border-r">
          <h3 className="text-2xl font-bold">
            {`${team.conference_wins} - ${team.conference_losses}`}
          </h3>
          <p className="text-sm font-sans text-black/50">Conference</p>
        </div>
        <div className="flex-1 w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-neutral-300 border-t-0 border-b md:border-b-0 border-l-0 border-r-0 md:border-r">
          <h3 className="text-2xl font-bold">{`${
            conferencePercentage ? conferencePercentage.toFixed(3) : "0.000"
          }`}</h3>
          <p className="text-sm font-sans text-black/50">Percentage</p>
        </div>
      </div>
      <div className="flex-[3_3_0%] w-full h-full flex justify-center items-center">
        <div className="flex-1 w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-neutral-300 border-t-0 border-b-0 border-l-0 border-r">
          <h3 className="text-2xl font-bold">
            {`${team.home_wins} - ${team.home_losses}`}
          </h3>
          <p className="text-sm font-sans text-black/50">Home</p>
        </div>
        <div className="flex-1 w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-neutral-300 border-t-0 border-b-0 border-l-0 border-r">
          <h3 className="text-2xl font-bold">
            {`${team.away_wins} - ${team.away_losses}`}
          </h3>
          <p className="text-sm font-sans text-black/50">Away</p>
        </div>
        <div className="flex-1 w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-t-0 border-b-0 border-l-0 border-r-0">
          <h3 className="text-2xl font-bold">
            {`${team.neutral_wins} - ${team.neutral_losses}`}
          </h3>
          <p className="text-sm font-sans text-black/50">Neutral</p>
        </div>
      </div>
    </section>
  );
};

export default Record;
