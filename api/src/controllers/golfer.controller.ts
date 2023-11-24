import express, { Request, Response } from "express";
import { container, inject, injectable } from "tsyringe";
// import { IGolferController } from "../interfaces/golfer.interface";
import { Golfer } from "../models/golfer.model";
import { GolferService } from "../services/golfer.service";

container.register("IGolferService", {
  useClass: GolferService,
});

@injectable()
export class GolferController {
  constructor(@inject("IGolferService") private golferService: GolferService) {
    this.getAllGolfers = this.getAllGolfers.bind(this);
    this.getGolferById = this.getGolferById.bind(this);
    this.updateGolferById = this.updateGolferById.bind(this);
    this.deleteGolferById = this.deleteGolferById.bind(this);
    this.createGolfer = this.createGolfer.bind(this);
  }

  public async getAllGolfers(req: Request, res: Response): Promise<Golfer[]> {
    const golfers = await this.golferService.getAllGolfers();
    return golfers;
     
  }

   public async createGolfer(req: Request, res: Response)  {
    const golfer = req.body;
    await this.golferService.createGolfer(golfer);
    res.status(200).send("controller succes -> id: " + golfer.id);
  }

  public async getGolferById(req: Request, res: Response)  {
    const id = req.body.id;
    const golfer = await this.golferService.getGolferById(id);
    res.status(200).send(golfer);
  }

  public async updateGolferById(req: Request, res: Response)  {
    const id = req.body.id;
    const golfer = req.body.golfer;
    await this.golferService.updateGolferById(id, golfer);
    res.status(200).send("golfer updated with id: " + id);
  }

  public async deleteGolferById(req: Request, res: Response)  {
    const id = req.body.id;
    await this.golferService.deleteGolferById(id);
    res.status(200).send("golfer deleted with id: " + id);
  }
}
