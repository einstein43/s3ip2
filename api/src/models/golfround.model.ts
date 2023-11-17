import { Golfer } from "./golfer.model";
import { GolfScore } from "./golfscore.model";

export interface GolfRound {
    id: number;
    golfer_id?: number | null;
    round_id?: number | null;
    golfers?: Golfer | null;
    golf_scores?: GolfScore | null;
  }
  