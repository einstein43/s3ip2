// import { IroundRepository } from "../interfaces/round.interface";
import { Round } from "../models/round.model";
import { PrismaClient } from "@prisma/client";
import { Golfer } from "../models/golfer.model";
import { GolfScore } from "../models/golfscore.model";
const prisma = new PrismaClient();

export default class roundRepository {
  constructor() {}

  public async getAllRounds(): Promise<any> {
    try {
      const rounds = await prisma.golf_scores.findMany({        
            });
      console.log("rounds retrieved");
      return rounds;
    } catch (error) {
      console.error("could not find rounds in repository"); 
      throw new Error("Failed to retrieve rounds");
    }
  }
  public async getRoundById(id:string): Promise<any> {
    try {
      console.log(id)
     const round = await prisma.golf_rounds.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      console.log("round retrieved with id" + id);
      return round;
    } catch (error) {
      console.error("could not find rounds in repository");
      throw new Error("Failed to retrieve rounds");
    }
  }


public async createScore(score: GolfScore): Promise<void> {
    try {
      if (!score.golf_round_id) throw new Error("No score provided");
      if (!score.golfer_id) throw new Error("No golfers provided");
      console.log("score created");

      const newScore = await prisma.golf_scores.create({
        data: {
          id: score.golf_round_id ?? undefined,
          golfer_id: score.golfer_id,
          hole1: score.hole1,
          hole2: score.hole2,
          hole3: score.hole3,
          hole4: score.hole4,
          hole5: score.hole5,
          hole6: score.hole6,
          hole7: score.hole7,
          hole8: score.hole8,
          hole9: score.hole9,
          hole10: score.hole10,
          hole11: score.hole11,
          hole12: score.hole12,
          hole13: score.hole13,
          hole14: score.hole14,
          hole15: score.hole15,
          hole16: score.hole16,
          hole17: score.hole17,
          hole18: score.hole18,
        },
      });
  
    } catch (error) {
      console.error("could not create score in repository");
      throw new Error("Failed to create score in repository");
    }
  }



  public async createRound(round: Round): Promise<void> {
    try {
      if (!round.id) throw new Error("No round provided");
      if (!round.golfer_id) throw new Error("No golfers provided");
      console.log("round created");

      const newRound = await prisma.golf_rounds.create({
        data: {
          id: round.id,
          golfer_id: round.golfer_id,
          round_id: round.round_id,
          golfers: round.golfers,
          golf_scores: round.golf_scores,
        },
      });
  
    } catch (error) {
      console.error("could not create round in repository");
      throw new Error("Failed to create round");
    }
  }
 

  public async updateRoundById(id: number, round: Round): Promise<void> {
    
  }

  public async deleteRoundById(id: number): Promise<void> {
  
  }
}
