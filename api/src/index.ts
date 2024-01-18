import "reflect-metadata";
import express, { Request, Response } from "express";
import { container } from "tsyringe";
import cors from "cors";
import bodyParser from "body-parser";
import { GolferController } from "./controllers/golfer.controller";
import { RoundController } from "./controllers/round.controller";
import { FlightController } from "./controllers/flight.controller";
import { PrismaClient } from "@prisma/client";
import { Golfer } from "./models/golfer.model";
import { Round } from "./models/round.model";
import { Flight } from "./models/flight.model";
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.options("*", cors());
app.use(
  cors({
    origin: "http://localhost:3000", // frontend domein
    methods: ["GET", "POST", "PUT", "DELETE"], // toegestane methodes
    allowedHeaders: ["Content-Type", "Authorization"], // toegestane headers
  })
);
express.json();
app.use(cors());

app.options("*", cors());

const golferController = container.resolve(GolferController);
const roundController = container.resolve(RoundController);
const flightController = container.resolve(FlightController);

{
  /* GOLFER ENDPOINTS */
}

app.post("/register", async (req: Request, res: Response) => {
  return await golferController.createGolfer(req, res);
});
 
app.post("/login", async (req: Request, res: Response) => {
   return await golferController.login(req, res);
});


app.get("/golfer/all", async (req: Request, res: Response) => {
  return await golferController.getAllGolfers(req, res);
});


app.put("/golfer/update", async (req: Request, res: Response) => {
  return await golferController.updateGolferById(req, res);
});

app.delete("/golfer/delete", async (req: Request, res: Response) => {
  return await golferController.deleteGolferById(req, res);
});

app.get("/golfer/:id", async (req: Request, res: Response) => {
  const golferId = parseInt(req.params.id);

  return await golferController.getGolferById(golferId, res);
});
app.get("/golfer/ngf/:ngf", async (req: Request, res: Response) => {
  const golferNgf = parseInt(req.params.ngf);

  return await golferController.getGolferByNgf(golferNgf, res);
});

{
  /* ROUND ENDPOINTS */
}

app.post("/score/new", async (req: Request, res: Response) => {
  return await roundController.createScore(req, res);
});

app.get("/rounds/all", async (req: Request, res: Response) => {
  return await roundController.getAllRounds(req, res);
});

app.post("/rounds/new", async (req: Request, res: Response) => {
  return await roundController.createRound(req, res);
});

app.put("/rounds/update", async (req: Request, res: Response) => {
  return await roundController.updateRoundById(req, res);
});
app.delete("/rounds/delete", async (req: Request, res: Response) => {
  return await roundController.deleteRoundById(req, res);
});

{
  /* FLIGHT ENDPOINTS */
}

app.get("flights/all", async (req: Request, res: Response) => {
  return await flightController.getAllFlights(req, res);
});

app.post("flights/new", async (req: Request, res: Response) => {
  return await flightController.createFlight(req, res);
});

app.put("flights/update", async (req: Request, res: Response) => {
  return await flightController.updateFlightById(req, res);
});

app.delete("flights/delete", async (req: Request, res: Response) => {
  return await flightController.deleteFlightById(req, res);
});

app.listen(3001, () => console.log("app listening on port 3001"));
