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
  }

  

  public async getAllRounds(req: Request, res: Response): Promise<Round[]> {
    const rounds: Round[] = await this.roundService.getAllRounds();
    res.status(200).send(rounds);
    return rounds;
  }

   public async createRound(req: Request, res: Response): Promise<void> {
    const round = req.body;
    await this.roundService.createRound(round);
    res.status(200).send("controller succes -> id: " + round.id);
  }

  public async getRoundById(req: Request, res: Response): Promise<void> {
    const id = req.body.id;
    const round = await this.roundService.getRoundById(id);
    res.status(200).send(round);
  }

  public async updateRoundById(req: Request, res: Response): Promise<void> {
    const id = req.body.id;
    const round = req.body.round;
    await this.roundService.updateRoundById(id, round);
    res.status(200).send("round updated with id: " + id);
  }

  public async deleteRoundById(req: Request, res: Response): Promise<void> {
    const id = req.body.id;
    await this.roundService.deleteRoundById(id);
    res.status(200).send("round deleted with id: " + id);
  }











}
