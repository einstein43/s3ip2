import { GolfRound } from "./golfround.model";

export interface GolfScore {
    id: number;
    golfer_id?: number | null;
    course?: string | null;
    date?: Date | null;
    hole1?: number | null;
    hole2?: number | null;
    hole3?: number | null;
    hole4?: number | null;
    hole5?: number | null;
    hole6?: number | null;
    hole7?: number | null;
    hole8?: number | null;
    hole9?: number | null;
    hole10?: number | null;
    hole11?: number | null;
    hole12?: number | null;
    hole13?: number | null;
    hole14?: number | null;
    hole15?: number | null;
    hole16?: number | null;
    hole17?: number | null;
    hole18?: number | null;
    golf_rounds: GolfRound[];
  }
  