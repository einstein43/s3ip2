import express, { Request, Response } from "express";
import { container, inject, injectable } from "tsyringe";
// import { IGolferController } from "../interfaces/golfer.interface";
import { Round } from "../models/round.model";
import { RoundService } from "../services/round.service";

container.register("IRoundService", {
  useClass: RoundService,
});

@injectable()
export class RoundController {
  constructor(@inject("IRoundService") private roundService: RoundService) {
    this.getAllRounds = this.getAllRounds.bind(this);
    this.createScore = this.createScore.bind(this);
  }

  public async getAllRounds(req: Request, res: Response) {
    try {
      const rounds: Round[] = await this.roundService.getAllRounds();
      res.status(200).send(rounds);
      console.log("controller: rounds retrieved");
    } catch (error) {
      console.error("Error retrieving rounds:", error);
      res.status(500).send("Error retrieving rounds");
    }


    
  }
public async createScore(req: Request, res: Response): Promise<void> {
    try {
      const score = req.body;
      console.log("controller score" + score);
      await this.roundService.createScore(score);
      res.status(200).send("controller success -> id: " + score.id);
    } catch (error) {
      console.error("Error creating score:", error);
      res.status(500).send("Error creating score in controller");
    }
  }



  public async createRound(req: Request, res: Response): Promise<void> {
    try {
      const round = req.body;
      await this.roundService.createRound(round);
      res.status(200).send("controller success -> id: " + round.id);
    } catch (error) {
      console.error("Error creating round:", error);
      res.status(500).send("Error creating round");
    }
  }

  public async getRoundById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.body.id;
      const round = await this.roundService.getRoundById(id);
      res.status(200).send(round);
    } catch (error) {
      console.error("Error retrieving round:", error);
      res.status(500).send("Error retrieving round");
    }
  }

  public async updateRoundById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.body.id;
      const round = req.body;
      await this.roundService.updateRoundById(id, round);
      res.status(200).send("Round updated with id: " + id);
    } catch (error) {
      console.error("Error updating round:", error);
      res.status(500).send("Error updating round");
    }
  }

  public async deleteRoundById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.body.id;
      await this.roundService.deleteRoundById(id);
      res.status(200).send("Round deleted with id: " + id);
    } catch (error) {
      console.error("Error deleting round:", error);
      res.status(500).send("Error deleting round");
    }
  }
}
