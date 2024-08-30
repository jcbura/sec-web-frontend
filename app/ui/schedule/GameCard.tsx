import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
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
  const opponentMascot = homeGame ? game.away_mascot : game.home_mascot;
  const opponentRank = homeGame ? game.away_rank : game.home_rank;

  const teamScore = homeGame ? game.home_score : game.away_score;
  const opponentScore = homeGame ? game.away_score : game.home_score;
  const gameResult: "W" | "L" | null =
    teamScore != null && opponentScore != null
      ? teamScore > opponentScore
        ? "W"
        : "L"
      : null;

  const teamIcon = getDecodedName(team.name);
  const opponentIcon = getDecodedName(opponent);

  const clsxBgObject = {
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

  const clsxAwayObj = {
    "text-alabama": game.away_score === teamScore && team.name === "Alabama",
    "text-arkansas": game.away_score === teamScore && team.name === "Arkansas",
    "text-auburn-primary":
      game.away_score === teamScore && team.name === "Auburn",
    "text-florida-primary":
      game.away_score === teamScore && team.name === "Florida",
    "text-georgia": game.away_score === teamScore && team.name === "Georgia",
    "text-kentucky": game.away_score === teamScore && team.name === "Kentucky",
    "text-lsu-primary": game.away_score === teamScore && team.name === "LSU",
    "text-mississippi-state":
      game.away_score === teamScore && team.name === "Mississippi State",
    "text-missouri": game.away_score === teamScore && team.name === "Missouri",
    "text-oklahoma": game.away_score === teamScore && team.name === "Oklahoma",
    "text-ole-miss-primary":
      game.away_score === teamScore && team.name === "Ole Miss",
    "text-south-carolina":
      game.away_score === teamScore && team.name === "South Carolina",
    "text-tennessee-primary":
      game.away_score === teamScore && team.name === "Tennessee",
    "text-texas": game.away_score === teamScore && team.name === "Texas",
    "text-texas-a&m":
      game.away_score === teamScore && team.name === "Texas A&M",
    "text-vanderbilt":
      game.away_score === teamScore && team.name === "Vanderbilt",
  };

  const clsxHomeObj = {
    "text-alabama": game.home_score === teamScore && team.name === "Alabama",
    "text-arkansas": game.home_score === teamScore && team.name === "Arkansas",
    "text-auburn-primary":
      game.home_score === teamScore && team.name === "Auburn",
    "text-florida-primary":
      game.home_score === teamScore && team.name === "Florida",
    "text-georgia": game.home_score === teamScore && team.name === "Georgia",
    "text-kentucky": game.home_score === teamScore && team.name === "Kentucky",
    "text-lsu-primary": game.home_score === teamScore && team.name === "LSU",
    "text-mississippi-state":
      game.home_score === teamScore && team.name === "Mississippi State",
    "text-missouri": game.home_score === teamScore && team.name === "Missouri",
    "text-oklahoma": game.home_score === teamScore && team.name === "Oklahoma",
    "text-ole-miss-primary":
      game.home_score === teamScore && team.name === "Ole Miss",
    "text-south-carolina":
      game.home_score === teamScore && team.name === "South Carolina",
    "text-tennessee-primary":
      game.home_score === teamScore && team.name === "Tennessee",
    "text-texas": game.home_score === teamScore && team.name === "Texas",
    "text-texas-a&m":
      game.home_score === teamScore && team.name === "Texas A&M",
    "text-vanderbilt":
      game.home_score === teamScore && team.name === "Vanderbilt",
  };

  return (
    <div className="w-[95%] md:w-[700px] lg:w-[950px] xl:w-[70%] h-full flex flex-col justify-center items-center bg-white text-black">
      <div
        className={clsx(
          "h-12 w-full flex lg:hidden justify-center items-center text-lg font-bold text-white border border-t border-b-0 border-l border-r border-transparent",
          clsxBgObject
        )}
      >
        <div>{`${day.toUpperCase()} ${date.toUpperCase()}`}</div>
      </div>
      <div className="w-full h-full lg:h-24 flex justify-center items-center">
        <div
          className={clsx(
            "w-28 h-full hidden lg:flex flex-col justify-center items-center text-lg font-bold text-white border border-t border-b-0 border-l border-r-0 border-transparent",
            clsxBgObject
          )}
        >
          <div>{day.toUpperCase()}</div>
          <div>{date.toUpperCase()}</div>
        </div>
        <div className="w-full h-full p-4 gap-4 flex flex-col lg:flex-row justify-center lg:justiy-start items-center border border-neutral-300 border-t-0 lg:border-t border-b-0 border-l lg:border-l-0 border-r">
          <div className="gap-4 flex-[3_3_0%] flex flex-col lg:flex-row justify-center lg:justify-start items-center">
            <Link
              href={
                game.conference_game ? `/teams/${getDecodedName(opponent)}` : ""
              }
              scroll={game.conference_game ? true : false}
              className={clsx("gap-4 flex justify-center items-center", {
                "cursor-not-allowed": !game.conference_game,
              })}
            >
              <Image
                src={`/teams/${opponentIcon}.png`}
                width={200}
                height={200}
                alt={`${opponentIcon} icon`}
                className="w-16 h-16"
              />
            </Link>
            <Link
              href={
                game.conference_game ? `/teams/${getDecodedName(opponent)}` : ""
              }
              scroll={game.conference_game ? true : false}
              className={clsx(
                "flex flex-col justify-center items-center lg:items-start",
                {
                  "cursor-not-allowed": !game.conference_game,
                }
              )}
            >
              <div className="flex justify-center items-center gap-2">
                {opponentRank && (
                  <div className="text-lg font-bold">{`No. ${opponentRank}`}</div>
                )}
                <div className="text-2xl font-bold">
                  {opponent.toUpperCase()}
                </div>
              </div>
              <div className="text-sm font-sans text-black/50">
                {opponentMascot}
              </div>
            </Link>
          </div>
          <div className="flex-[2_2_0%] flex flex-col justify-center items-center lg:items-start">
            <div className="text-2xl font-bold">
              {game.neutral_site ? "NEUTRAL" : homeGame ? "HOME" : "AWAY"}
            </div>
            <div className="text-sm font-sans text-black/50">
              {game.stadium}
            </div>
          </div>
          {game.game_played ? (
            <div className="flex-[2_2_0%] gap-4 lg:gap-0 flex justify-center lg:justify-start items-center text-4xl font-bold">
              <div className="flex-1 flex justify-center items-center">
                {gameResult}
              </div>
              <div className="flex-1 gap-2 flex justify-center items-center">
                <div className={clsx("", clsxAwayObj)}>
                  {homeGame ? opponentScore : teamScore}
                </div>
                <div>-</div>
                <div className={clsx("", clsxHomeObj)}>
                  {homeGame ? teamScore : opponentScore}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-[2_2_0%] flex justify-center items-center text-4xl font-bold">
              {time}
            </div>
          )}
        </div>
      </div>
      <div className="h-12 w-full px-7 py-2.5 flex justify-center lg:justify-end items-center bg-neutral-300 border border-neutral-300 border-t border-b border-l border-r">
        <Link href="/teams">
          <Image
            src={`/sec/base/${teamIcon}.png`}
            width={64}
            height={64}
            alt={`${teamIcon} sec icon`}
            className={clsx("w-8 h-8", {
              hidden: !game.conference_game,
            })}
          />
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
