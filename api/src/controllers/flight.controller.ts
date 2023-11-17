import express, { Request, Response } from "express";
import { container, inject, injectable } from "tsyringe";
 import { Flight } from "../models/flight.model";
import { FlightService } from "../services/flight.service";

container.register("IFlightService", {
  useClass: FlightService,
});

@injectable()
export class FlightController {
  constructor(@inject("IFlightService") private flightService: FlightService) {
    this.getAllFlights = this.getAllFlights.bind(this);
    this.getFlightById = this.getFlightById.bind(this);
    this.updateFlightById = this.updateFlightById.bind(this);
    this.deleteFlightById = this.deleteFlightById.bind(this);
    this.createFlight = this.createFlight.bind(this);
  }

  public async getAllFlights(req: Request, res: Response)  {
    const flights: Flight[] = await this.flightService.getAllFlights();
    res.status(200).send(flights);
 
  }

   public async createFlight(req: Request, res: Response) {
    const flight = req.body;
    await this.flightService.createFlight(flight);
    res.status(200).send("controller succes -> id: " + flight.id);
  }

  public async getFlightById(req: Request, res: Response)  {
    const id = req.body.id;
    const flight = await this.flightService.getFlightById(id);
    res.status(200).send(flight);
  }

  public async updateFlightById(req: Request, res: Response)  {
    const id = req.body.id;
    const flight = req.body.flight;
    await this.flightService.updateFlightById(id, flight);
    res.status(200).send("flight updated with id: " + id);
  }

  public async deleteFlightById(req: Request, res: Response)  {
    const id = req.body.id;
    await this.flightService.deleteFlightById(id);
    res.status(200).send("flight deleted with id: " + id);
  }
}
