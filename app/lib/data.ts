import { unstable_noStore as noStore } from "next/cache";
import { Game, NextGame, SortEnum, Team, TeamEnum } from "./definitions";

export const fetchTeams = async (sort?: SortEnum) => {
  noStore();
  try {
    const res = await fetch(
      `http://localhost:3000/api/teams${sort ? `?sort=${sort}` : ""}`
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    const repo: Team[] = await res.json();
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
    const repo: Game[] = await res.json();
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

export const fetchSECCGame = async () => {
  noStore();
  try {
    const res = await fetch(`http://localhost:3000/api/games/sec`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    const repo: Game = await res.json();
    return repo;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch game.");
  }
};

export const searchTeam = async (team: string) => {
  noStore();
  try {
    const res = await fetch(
      `http://localhost:3000/api/teams/search?name=${team}`
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    const repo: Team[] = await res.json();
    return repo;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to find teams.");
  }
};
