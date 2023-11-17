import { GolfRound } from "./golfround.model";

export interface Golfer {
    id: number;
    name: string | null;
    age: number | null;
    handicap: number | null;
    homecourse: string | null;
    country: string | null;
    golf_rounds: GolfRound[] | null;
  }