// import { IroundService } from "../interfaces/round.interface";
// import { IroundRepository } from "../interfaces/round.interface";
import { container, inject, injectable } from "tsyringe";
import { Round } from "../models/round.model";
import RoundRepository from "../repositories/round.repository";

container.register("IroundRepository", {
  useClass: RoundRepository,
});

@injectable()
export class RoundService {
  constructor(
    @inject("IroundRepository") private roundRepository: RoundRepository
  ) {
    this.getAllRounds = this.getAllRounds.bind(this);
    this.createRound = this.createRound.bind(this);
    this.getRoundById = this.getRoundById.bind(this);
    this.deleteRoundById = this.deleteRoundById.bind(this);
    this.updateRoundById = this.updateRoundById.bind(this);
  }

  public async getAllRounds(): Promise<Round[]> {
    const Rounds: Round[] = await this.roundRepository.getAllRounds();
    return Rounds;
  }

  public async createRound(round: Round): Promise<void> {
    await this.roundRepository.createRound(round);
  }

  public async getRoundById(id: string): Promise<Round> {
    const Round: Round = await this.roundRepository.getRoundById(id);
    return Round;
  }

  public async updateRoundById(id: number, round: Round): Promise<void> {
    await this.roundRepository.updateRoundById(id, round);
  }

  public async deleteRoundById(id: number): Promise<void> {
    await this.roundRepository.deleteRoundById(id);
  }
}
