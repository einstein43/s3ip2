import "reflect-metadata";
import express, { Request, Response } from "express";
import { container } from "tsyringe";
import cors from "cors";
import bodyParser from "body-parser";

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
    allowedHeaders: ["Content-Type", "Authorization"],  // toegestane headers 
  })
);
express.json();
app.use(cors());

app.options("*", cors());


app.get("/golfer/all", async (req: Request, res: Response) => {
    
  });
  


app.listen(3001, () => console.log("app listening on port 3001"));
