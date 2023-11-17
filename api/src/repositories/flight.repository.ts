// import { IflightRepository } from "../interfaces/flight.interface";
import { Flight } from "../models/flight.model";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class FlightRepository {
  constructor() {}

  public async getAllFlights(): Promise<any> {
    try {
      const flights = await prisma.flights.findMany({        
            });
      console.log("flights retrieved");
      return flights;
    } catch (error) {
      console.error("could not find flights in repository");
      throw new Error("Failed to retrieve flights");
    }
  }
  public async getFlightById(id:string): Promise<any> {
    try {
      console.log(id)
     const flight = await prisma.flights.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      console.log("flight retrieved with id" + id);
      return flight;
    } catch (error) {
      console.error("could not find flights in repository");
      throw new Error("Failed to retrieve flights");
    }
  }

  public async createflight(flight: Flight): Promise<void> {
     
      
  }
 

  public async updateFlightById(id: number, flight: Flight): Promise<void> {
    
  }

  public async deleteFlightById(id: number): Promise<void> {
    try {
      const deletedflight = await prisma.flights.delete({
        where: {
          id: id,
        },
      });
      console.log(deletedflight);
    } catch (error) {
      console.error("could not delete flight in repository");
      throw new Error("Failed to delete flight");
    }
    console.log("flight deleted");
  }
}
