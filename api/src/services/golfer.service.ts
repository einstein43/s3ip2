// import { IGolferService } from "../interfaces/golfer.interface";
// import { IGolferRepository } from "../interfaces/golfer.interface";
import { container, inject, injectable } from "tsyringe";
import { Golfer } from "../models/golfer.model";
import GolferRepository from "../repositories/golfer.repository";

container.register("IGolferRepository", {
  useClass: GolferRepository,
});

@injectable()
export class GolferService {
  constructor(
    @inject("IGolferRepository") private golferRepository: GolferRepository
  ) {
    this.getAllGolfers = this.getAllGolfers.bind(this);
    this.createGolfer = this.createGolfer.bind(this);
    this.getGolferById = this.getGolferById.bind(this);
    this.deleteGolferById = this.deleteGolferById.bind(this);
    this.updateGolferById = this.updateGolferById.bind(this);
  }

  public async getAllGolfers() {
    const golfers = await this.golferRepository.getAllGolfers();
    console.log("service: golfers retrieved");
    return golfers;
  }

  public async createGolfer(golfer: Golfer): Promise<void> {
    await this.golferRepository.createGolfer(golfer);
    console.log("service: golfer created");
  }

  public async getGolferById(id: string): Promise<Golfer> {
    const golfer: Golfer = await this.golferRepository.getGolferById(id);
    console.log("service: unique golfer retrieved");
    return golfer;
  }

  public async updateGolferById(id: number, golfer: Golfer): Promise<void> {
    await this.golferRepository.updateGolferById(id, golfer);
    console.log("service: golfer updated");
  }

  public async deleteGolferById(id: number): Promise<void> {
    await this.golferRepository.deleteGolferById(id);
    console.log("service: golfer deleted")
  }
}
