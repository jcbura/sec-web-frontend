import clsx from "clsx";
import Image from "next/image";
import { Game, Team } from "../../lib/definitions";
import { getDecodedName, formatDate, formatTime } from "../../lib/scripts";

interface Props {
  game: Game;
  team: Team;
}

const GameCard = ({ game, team }: Props) => {
  const [date, day] = formatDate(game.game_date);
  const time = formatTime(game.game_time || "");

  const homeGame = game.home_team === team.name;
  const opponent = homeGame ? game.away_team : game.home_team;
  const opponentRank = homeGame ? game.away_rank : game.home_rank;

  const teamIcon = getDecodedName(team.name);
  const opponentIcon = getDecodedName(opponent);

  const clsxObj = {
    "bg-alabama": team.name === "Alabama",
    "bg-arkansas": team.name === "Arkansas",
    "bg-auburn-primary": team.name === "Auburn",
    "bg-florida-primary": team.name === "Florida",
    "bg-georgia": team.name === "Georgia",
    "bg-kentucky": team.name === "Kentucky",
    "bg-lsu-primary": team.name === "LSU",
    "bg-mississippi-state": team.name === "Mississippi State",
    "bg-missouri": team.name === "Missouri",
    "bg-oklahoma": team.name === "Oklahoma",
    "bg-ole-miss-primary": team.name === "Ole Miss",
    "bg-south-carolina": team.name === "South Carolina",
    "bg-tennessee-primary": team.name === "Tennessee",
    "bg-texas": team.name === "Texas",
    "bg-texas-a&m": team.name === "Texas A&M",
    "bg-vanderbilt": team.name === "Vanderbilt",
  };

  return (
    <div className="w-[95%] md:w-[700px] lg:w-[950px] xl:w-[70%] h-full flex flex-col justify-center items-center bg-white text-black tracking-wide">
      <div
        className={clsx(
          "h-12 w-full flex lg:hidden justify-center items-center text-lg font-bold text-white border border-t border-b-0 border-l border-r border-transparent",
          clsxObj
        )}
      >
        <div>{`${day.toUpperCase()} ${date.toUpperCase()}`}</div>
      </div>
      <div className="w-full h-full lg:h-24 flex justify-center items-center">
        <div
          className={clsx(
            "w-28 h-full hidden lg:flex flex-col justify-center items-center text-lg font-bold text-white border border-t border-b-0 border-l border-r-0 border-transparent",
            clsxObj
          )}
        >
          <div>{day.toUpperCase()}</div>
          <div>{date.toUpperCase()}</div>
        </div>
        <div className="w-full h-full p-4 gap-4 flex flex-col lg:flex-row justify-center lg:justiy-start items-center border border-neutral-300 border-t-0 lg:border-t border-b-0 border-l lg:border-l-0 border-r">
          <div className="gap-4 flex-[3_3_0%] flex flex-col lg:flex-row justify-center lg:justify-start items-center">
            <div className="gap-4 flex justify-center items-center">
              <Image
                src={`/team-icons/${opponentIcon}.png`}
                width={72}
                height={72}
                alt={`${teamIcon} icon`}
                className="w-22 h-22"
              />
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start">
              <div className="flex justify-center items-center gap-2">
                {opponentRank && (
                  <div className="text-lg font-bold">{`No. ${opponentRank}`}</div>
                )}
                <div className="text-2xl font-bold">
                  {opponent.toUpperCase()}
                </div>
              </div>
              <div className="text-sm font-sans text-black/50">
                {homeGame ? game.away_mascot : game.home_mascot}
              </div>
            </div>
          </div>
          <div className="flex-[2_2_0%] flex flex-col justify-center items-center lg:items-start">
            <div className="text-2xl font-bold">
              {game.neutral_site ? "NEUTRAL" : homeGame ? "HOME" : "AWAY"}
            </div>
            <div className="text-sm font-sans text-black/50">
              {game.stadium}
            </div>
          </div>
          <div className="flex-[2_2_0%] flex justify-center items-center text-4xl font-bold">
            {time}
          </div>
        </div>
      </div>
      <div className="h-12 w-full px-7 py-2.5 flex justify-center lg:justify-end items-center bg-neutral-300 border border-neutral-300 border-t border-b border-l border-r">
        <Image
          src={`/sec-icons/${teamIcon}.svg`}
          width={72}
          height={72}
          alt={`${teamIcon} sec icon`}
          className={clsx("w-8 h-8", {
            hidden: !game.conference_game,
          })}
        />
      </div>
    </div>
  );
};

export default GameCard;
