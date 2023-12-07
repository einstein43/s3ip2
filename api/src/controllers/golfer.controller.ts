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

  public async getAllGolfers(req: Request, res: Response) {
    try {
      const golfers = await this.golferService.getAllGolfers();
      res.status(200).json(golfers);
      console.log("controller: golfers retrieved");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  public async getGolferById(req: Request, res: Response) {
    try {
      const id = req.body.id;
      const golfer = await this.golferService.getGolferById(id);
      res.status(200).send(golfer);
      console.log("controller: unique golfer retrieved   id=" + id);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  public async updateGolferById(req: Request, res: Response) {
    try {
      const id = req.body.id;
      const golfer = req.body;
      await this.golferService.updateGolferById(id, golfer);
      res.status(200).send("golfer updated with id: " + golfer.id);
      console.log("controller: golfer updated   id=" + id);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  public async deleteGolferById(req: Request, res: Response) {
    try {
      const id = req.body.id;
      await this.golferService.deleteGolferById(id);
      res.status(200).send("controller: golfer deleted with id:  " + id);
      console.log("controller: golfer deleted with id:  " + id);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  public async createGolfer(req: Request, res: Response) {
    try {
      const golfer = req.body;
      await this.golferService.createGolfer(golfer);
      res.status(200).send("controller: golfer created   id= " + golfer.id);
      console.log("controller: golfer created   id= " + golfer.id);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}
