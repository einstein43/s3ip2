import { Decimal } from "@prisma/client/runtime/library";
import { GolfRound } from "./golfround.model";

export interface Golfer {
    id: number;
    name: string | null;
    age: number | null;
    handicap: Decimal | null;
    homecourse: string | null;
    country: string | null;
    golf_rounds?: GolfRound[];
    ngf: number | null;
    password: string | null;
    currentmatch_id: number | null ;
    currentflight_id: number | null;
   }