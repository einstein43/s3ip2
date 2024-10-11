"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const golfer_controller_1 = require("./controllers/golfer.controller");
const round_controller_1 = require("./controllers/round.controller");
const flight_controller_1 = require("./controllers/flight.controller");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.options("*", (0, cors_1.default)());
app.use((0, cors_1.default)({
    origin: "http://localhost:3000", // frontend domein
    methods: ["GET", "POST", "PUT", "DELETE"], // toegestane methodes
    allowedHeaders: ["Content-Type", "Authorization"], // toegestane headers
}));
express_1.default.json();
app.use((0, cors_1.default)());
app.options("*", (0, cors_1.default)());
const golferController = tsyringe_1.container.resolve(golfer_controller_1.GolferController);
const roundController = tsyringe_1.container.resolve(round_controller_1.RoundController);
const flightController = tsyringe_1.container.resolve(flight_controller_1.FlightController);
{
    /* GOLFER ENDPOINTS */
}
app.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield golferController.createGolfer(req, res);
}));
app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield golferController.login(req, res);
}));
app.get("/golfer/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield golferController.getAllGolfers(req, res);
}));
app.put("/golfer/update", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield golferController.updateGolferById(req, res);
}));
app.delete("/golfer/delete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield golferController.deleteGolferById(req, res);
}));
app.get("/golfer/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const golferId = parseInt(req.params.id);
    return yield golferController.getGolferById(golferId, res);
}));
app.get("/golfer/ngf/:ngf", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const golferNgf = parseInt(req.params.ngf);
    return yield golferController.getGolferByNgf(golferNgf, res);
}));
{
    /* ROUND ENDPOINTS */
}
app.post("/score/new", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield roundController.createScore(req, res);
}));
app.get("/rounds/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield roundController.getAllRounds(req, res);
}));
app.post("/rounds/new", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield roundController.createRound(req, res);
}));
app.put("/rounds/update", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield roundController.updateRoundById(req, res);
}));
app.delete("/rounds/delete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield roundController.deleteRoundById(req, res);
}));
{
    /* FLIGHT ENDPOINTS */
}
app.get("flights/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield flightController.getAllFlights(req, res);
}));
app.post("flights/new", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield flightController.createFlight(req, res);
}));
app.put("flights/update", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield flightController.updateFlightById(req, res);
}));
app.delete("flights/delete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield flightController.deleteFlightById(req, res);
}));
app.listen(3001, () => console.log("app listening on port 3001"));
exports.default = app;
