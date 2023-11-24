// import { IGolferRepository } from "../interfaces/golfer.interface";
import { Golfer } from "../models/golfer.model";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class GolferRepository {
  constructor() {}

  public async getAllGolfers() {
    try {
      const golfers = await prisma.golfers.findMany({        
            });
      console.log("golfers retrieved");
      return golfers;
    } catch (error) {
      console.error("could not find golfers in repository");
      throw new Error("Failed to retrieve golfers");
    }
  }
  public async getGolferById(id:string): Promise<any> {
    try {
      console.log(id)
     const golfer = await prisma.golfers.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      console.log("golfer retrieved with id" + id);
      return golfer;
    } catch (error) {
      console.error("could not find golfers in repository");
      throw new Error("Failed to retrieve golfers");
    }
  }

  public async createGolfer(golfer: Golfer): Promise<void> {
    try {
      if (!golfer.name) throw new Error("No golfer provided");
      if (!golfer.golf_rounds) throw new Error("No golf rounds provided");
      console.log("golfer created");

      const newGolfer = await prisma.golfers.create({
        data: {
          id: golfer.id,
          name: golfer.name,
          handicap: golfer.handicap || 0,
          age: golfer.age || 0,
          homecourse: golfer.homecourse || "null",
          country: golfer.country || "null",
          golf_rounds: {
            connect: golfer.golf_rounds.map(round => ({ id: round.id })),
          },
        },
      });
      console.log("golfer created");
    } catch (error) {
      console.error(error);
    }
  }
 

  public async updateGolferById(id: number, golfer: Golfer): Promise<void> {
    
  }

  public async deleteGolferById(id: number): Promise<void> {
    try {
      const deletedGolfer = await prisma.golfers.delete({
        where: {
          id: id,
        },
      });
      console.log(deletedGolfer);
    } catch (error) {
      console.error("could not delete golfer in repository");
      throw new Error("Failed to delete golfer");
    }
    console.log("golfer deleted");
  }
}
