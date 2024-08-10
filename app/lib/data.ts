import { unstable_noStore as noStore } from "next/cache";
import { Game, NextGame, Team, TeamEnum } from "./definitions";

export const fetchTeams = async () => {
  noStore();
  try {
    const res = await fetch("http://localhost:3000/api/teams");
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    const repo: [Team] = await res.json();
    return repo;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch teams.");
  }
};

export const fetchTeam = async (team: TeamEnum) => {
  noStore();
  try {
    const res = await fetch(`http://localhost:3000/api/teams/${team}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    const repo: Team = await res.json();
    return repo;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch team.");
  }
};

export const fetchGames = async () => {
  noStore();
  try {
    const res = await fetch("http://localhost:3000/api/games");
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    const repo: [Game] = await res.json();
    return repo;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch games.");
  }
};

export const fetchNextGame = async (team: TeamEnum) => {
  noStore();
  try {
    const res = await fetch(`http://localhost:3000/api/games/${team}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    const repo: NextGame = await res.json();
    return repo;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch game.");
  }
};

// FINISH AND MAKE SEARCH BAR
export const searchTeam = async (team: string) => {};
