// import { IGolferRepository } from "../interfaces/golfer.interface";
import { Golfer } from "../models/golfer.model";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class GolferRepository {
  constructor() {}

  public async login(ngf: number): Promise<string> {
    try {
      const golfer = await prisma.golfers.findFirst({
        where: {
          ngf: ngf,
        },
      });
  
      if (golfer) {
        console.log("repository: golfer found, returning hashed password");
        console.log(golfer);
        const password = golfer.password || "test wrong";;
        console.log(password);
        return password;
      } else {
        console.error("Golfer not found");
        return "Golfer not found";
      }
    } catch (error) {
      console.error("An error occurred:", error);
      return "password incorrect";
    }
  }
  

  public async createGolfer(ngf: number, password: string) : Promise<void> {
    try {
      const newGolfer = await prisma.golfers.create({
        data: {
          ngf: ngf,
          password: password,
        },
      });
       console.log("repository: golfer created");
       
    } catch (error) {
      console.error(error);
    }
  }
  
  
  public async getAllGolfers(): Promise<Golfer[]> {
    try {
      const golfers = await prisma.golfers.findMany({});
      console.log("repository: golfers retrieved");
      return golfers;
     } catch (error) {
      console.error("could not find golfers in repository");
      throw new Error("Failed to retrieve golfers");
    }
  }

  public async getGolferById(id: number): Promise<any> {
    try {
      console.log(id);
      const golfer = await prisma.golfers.findUnique({
        where: {
          id: id,
        },
      });
      console.log("golfer retrieved with id" + id);
      console.log(golfer);
      return golfer;
    } catch (error) {
      console.error("could not find golfers in repository");
      throw new Error("Failed to retrieve golfers");
    }
  }
  public async getGolferByNgf(ngf: number): Promise<any> {
    try {
      console.log(ngf);
      const golfer = await prisma.golfers.findFirst({
        where: {
          ngf: ngf,
        },
      });
      console.log("golfer retrieved with ngf" + ngf);
      console.log(golfer);
      return golfer;
    } catch (error) {
      console.error("could not find golfers in repository");
      throw new Error("Failed to retrieve golfers");
    }
  }


  public async updateGolferById(id: number, golfer: Golfer): Promise<void> {
    try {
      if (!golfer.name) throw new Error("No golfer provided");
      if (!golfer.golf_rounds) throw new Error("No golf rounds provided");
      if (!golfer.id) throw new Error("No id provided");

      const updatedGolfer = await prisma.golfers.update({
        where: {
          id: id,
        },
        data: {
          id: golfer.id,
          name: golfer.name,
          handicap: golfer.handicap || 0,
          age: golfer.age || 0,
          homecourse: golfer.homecourse || "null",
          country: golfer.country || "null",
          golf_rounds: {},
        },
      });
      console.log("repository: golfer updated");
    } catch (error) {
      console.error(error);
    }
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
    console.log("repository: golfer deleted");
  }
}
