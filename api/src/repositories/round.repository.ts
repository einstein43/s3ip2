// import { IroundRepository } from "../interfaces/round.interface";
import { Round } from "../models/round.model";
import { PrismaClient } from "@prisma/client";
import { Golfer } from "../models/golfer.model";
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
