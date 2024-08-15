import clsx from "clsx";
import Image from "next/image";
import { Team } from "../lib/definitions";
import { getDecodedName } from "../lib/scripts";

interface Props {
  team?: Team;
  isMobile: boolean;
}

const BottomBar = ({ team, isMobile }: Props) => {
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
    "bg-sec-primary": !team,
  };

  return (
    <div
      className={clsx(
        "relative w-full h-16 px-8 gap-4 flex justify-center items-center",
        clsxObj
      )}
    >
      {!isMobile ? (
        <Image
          src={
            team
              ? `/sec/white/${getDecodedName(team.name)}.png`
              : "/sec/sec.png"
          }
          width={62}
          height={62}
          alt="sec icon"
          className="w-12 h-12"
        />
      ) : (
        <Image
          src={
            team
              ? `/sec/white/${getDecodedName(team.name)}.png`
              : "/sec/sec.png"
          }
          width={62}
          height={62}
          alt="sec icon"
          className="w-10 h-10"
        />
      )}
    </div>
  );
};

export default BottomBar;
