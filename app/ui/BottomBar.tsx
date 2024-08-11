import clsx from "clsx";
import Image from "next/image";
import { Team } from "../lib/definitions";

interface Props {
  team?: Team;
}

const BottomBar = ({ team }: Props) => {
  const clsxObj = {
    "bg-alabama": team?.name === "Alabama",
    "bg-arkansas": team?.name === "Arkansas",
    "bg-auburn-primary": team?.name === "Auburn",
    "bg-florida-primary": team?.name === "Florida",
    "bg-georgia": team?.name === "Georgia",
    "bg-kentucky": team?.name === "Kentucky",
    "bg-lsu-primary": team?.name === "LSU",
    "bg-mississippi-state": team?.name === "Mississippi State",
    "bg-missouri": team?.name === "Missouri",
    "bg-oklahoma": team?.name === "Oklahoma",
    "bg-ole-miss-primary": team?.name === "Ole Miss",
    "bg-south-carolina": team?.name === "South Carolina",
    "bg-tennessee-primary": team?.name === "Tennessee",
    "bg-texas": team?.name === "Texas",
    "bg-texas-a&m": team?.name === "Texas A&M",
    "bg-vanderbilt": team?.name === "Vanderbilt",
    "bg-sec": !team,
  };

  return (
    <div
      className={clsx(
        "w-full h-16 px8 py-4 flex justify-center items-center",
        clsxObj
      )}
    >
      <Image
        src={`/sec-icons/${team ? `${team.name}-alt` : "sec"}.svg`}
        width={62}
        height={62}
        alt="sec icon"
        className="w-12 h-12"
      />
    </div>
  );
};

export default BottomBar;
