// import { IflightService } from "../interfaces/flight.interface";
// import { IflightRepository } from "../interfaces/flight.interface";
import { container, inject, injectable } from "tsyringe";
import { Flight } from "../models/flight.model";
import FlightRepository from "../repositories/flight.repository";

container.register("IFlightRepository", {
  useClass: FlightRepository,
});

@injectable()
export class FlightService {
  constructor(
    @inject("IFlightRepository") private flightRepository: FlightRepository
  ) {
    this.getAllFlights = this.getAllFlights.bind(this);
    this.createFlight = this.createFlight.bind(this);
    this.getFlightById = this.getFlightById.bind(this);
    this.deleteFlightById = this.deleteFlightById.bind(this);
    this.updateFlightById = this.updateFlightById.bind(this);
  }

  public async getAllFlights(): Promise<Flight[]> {
    const flights: Flight[] = await this.flightRepository.getAllFlights();
    return flights;
  }

  public async createFlight(flight: Flight): Promise<void> {
    await this.flightRepository.createflight(flight);
  }

  public async getFlightById(id: string): Promise<Flight> {
    const flight: Flight = await this.flightRepository.getFlightById(id);
    return flight;
  }

  public async updateFlightById(id: number, flight: Flight): Promise<void> {
    await this.flightRepository.updateFlightById(id, flight);
  }

  public async deleteFlightById(id: number): Promise<void> {
    await this.flightRepository.deleteFlightById(id);
  }
}
