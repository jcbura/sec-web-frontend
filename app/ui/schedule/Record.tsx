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

  const clsxBorderPrimaryObj = {
    "border-alabama": team.name === "Alabama",
    "border-arkansas": team.name === "Arkansas",
    "border-auburn-primary dark:border-auburn-secondary":
      team.name === "Auburn",
    "border-florida-primary dark:border-florida-secondary":
      team.name === "Florida",
    "border-georgia": team.name === "Georgia",
    "border-kentucky": team.name === "Kentucky",
    "border-lsu-primary dark:border-lsu-secondary": team.name === "LSU",
    "border-mississippi-state": team.name === "Mississippi State",
    "border-missouri": team.name === "Missouri",
    "border-oklahoma": team.name === "Oklahoma",
    "border-ole-miss-primary dark:border-ole-miss-secondary":
      team.name === "Ole Miss",
    "border-south-carolina": team.name === "South Carolina",
    "border-tennessee-primary": team.name === "Tennessee",
    "border-texas": team.name === "Texas",
    "border-texas-a&m": team.name === "Texas A&M",
    "border-vanderbilt": team.name === "Vanderbilt",
  };

  return (
    <div
      className={clsx(
        "w-[95%] md:w-[700px] lg:w-[950px] xl:w-[70%] h-full flex flex-col md:flex-row justify-center items-center border bg-white dark:bg-neutral-950 text-black dark:text-white",
        clsxBorderPrimaryObj
      )}
    >
      <div className="flex-[2_2_0%] w-full h-full flex justify-center items-center">
        <div
          className={clsx(
            "flex-1 w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-t-0 border-b md:border-b-0 border-l-0 border-r",
            clsxBorderPrimaryObj
          )}
        >
          <div className="text-sm font-sans text-black/50 dark:text-white/50">
            Overall
          </div>
          <div className="text-2xl font-bold">
            {`${team.total_wins} - ${team.total_losses}`}
          </div>
        </div>
        <div
          className={clsx(
            "flex-1 w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-t-0 border-b md:border-b-0 border-l-0 border-r-0 md:border-r",
            clsxBorderPrimaryObj
          )}
        >
          <div className="text-sm font-sans text-black/50 dark:text-white/50">
            Percentage
          </div>
          <div className="text-2xl font-bold">{`${
            totalPercentage ? totalPercentage.toFixed(3) : "0.000"
          }`}</div>
        </div>
      </div>
      <div className="flex-[2_2_0%] w-full h-full flex justify-center items-center">
        <div
          className={clsx(
            "flex-1 w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-t-0 border-b md:border-b-0 border-l-0 border-r",
            clsxBorderPrimaryObj
          )}
        >
          <div className="text-sm font-sans text-black/50 dark:text-white/50">
            Conference
          </div>
          <div className="text-2xl font-bold">
            {`${team.conference_wins} - ${team.conference_losses}`}
          </div>
        </div>
        <div
          className={clsx(
            "flex-1 w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-t-0 border-b md:border-b-0 border-l-0 border-r-0 md:border-r",
            clsxBorderPrimaryObj
          )}
        >
          <div className="text-sm font-sans text-black/50 dark:text-white/50">
            Percentage
          </div>
          <div className="text-2xl font-bold">{`${
            totalPercentage ? totalPercentage.toFixed(3) : "0.000"
          }`}</div>
        </div>
      </div>
      <div className="flex-[3_3_0%] w-full h-full flex justify-center items-center">
        <div
          className={clsx(
            "flex-1 w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-t-0 border-b-0 border-l-0 border-r",
            clsxBorderPrimaryObj
          )}
        >
          <div className="text-sm font-sans text-black/50 dark:text-white/50">
            Home
          </div>
          <div className="text-2xl font-bold">
            {`${team.home_wins} - ${team.home_losses}`}
          </div>
        </div>
        <div
          className={clsx(
            "flex-1 w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-t-0 border-b-0 border-l-0 border-r",
            clsxBorderPrimaryObj
          )}
        >
          <div className="text-sm font-sans text-black/50 dark:text-white/50">
            Away
          </div>
          <div className="text-2xl font-bold">
            {`${team.away_wins} - ${team.away_losses}`}
          </div>
        </div>
        <div
          className={clsx(
            "flex-1 w-full h-full gap-2 p-4 flex flex-col justify-center items-center border border-t-0 border-b-0 border-l-0 border-r-0",
            clsxBorderPrimaryObj
          )}
        >
          <div className="text-sm font-sans text-black/50 dark:text-white/50">
            Neutral
          </div>
          <div className="text-2xl font-bold">
            {`${team.neutral_wins} - ${team.neutral_losses}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Record;
