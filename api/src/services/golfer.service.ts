// import { IGolferService } from "../interfaces/golfer.interface";
// import { IGolferRepository } from "../interfaces/golfer.interface";
import { container, inject, injectable } from "tsyringe";
import { Golfer } from "../models/golfer.model";
import GolferRepository from "../repositories/golfer.repository";
import bcrypt from "bcrypt";
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
    this.getGolferByNgf = this.getGolferByNgf.bind(this);
    this.login = this.login.bind(this);
  }

  public async login(ngf: number, password: string): Promise<string> {
    const storedHashedPassword = await this.golferRepository.login(ngf);
    const isPasswordValid = await bcrypt.compare(
      password,
      storedHashedPassword
    );
    console.log("service: password valid: " + isPasswordValid);
    if (isPasswordValid) {
      return "login successful";
    } else {
      return "password incorrect";
    }
  }

  public async createGolfer(ngf: number, password: string): Promise<void> {
    const hashedPassword = await bcrypt.hash(password, 10);
    await this.golferRepository.createGolfer(ngf, hashedPassword);
    console.log("service: golfer created");
  }

  public async getAllGolfers() {
    const golfers = await this.golferRepository.getAllGolfers();
    console.log("service: golfers retrieved");
    return golfers;
  }

  public async getGolferById(id: number): Promise<Golfer> {
    const golfer: Golfer = await this.golferRepository.getGolferById(id);
    console.log("service: unique golfer retrieved" + golfer);
    return golfer;
  }
  public async getGolferByNgf(ngf: number): Promise<Golfer> {
    const golfer: Golfer = await this.golferRepository.getGolferByNgf(ngf);
    console.log("service: unique ngf golfer retrieved" + golfer);
    return golfer;
  }

  public async updateGolferById(id: number, golfer: Golfer): Promise<void> {
    await this.golferRepository.updateGolferById(id, golfer);
    console.log("service: golfer updated");
  }

  public async deleteGolferById(id: number): Promise<void> {
    await this.golferRepository.deleteGolferById(id);
    console.log("service: golfer deleted");
  }
}
