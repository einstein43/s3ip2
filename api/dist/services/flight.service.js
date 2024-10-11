"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.FlightService = void 0;
// import { IflightService } from "../interfaces/flight.interface";
// import { IflightRepository } from "../interfaces/flight.interface";
const tsyringe_1 = require("tsyringe");
const flight_repository_1 = __importDefault(require("../repositories/flight.repository"));
tsyringe_1.container.register("IFlightRepository", {
    useClass: flight_repository_1.default,
});
let FlightService = class FlightService {
    constructor(flightRepository) {
        this.flightRepository = flightRepository;
        this.getAllFlights = this.getAllFlights.bind(this);
        this.createFlight = this.createFlight.bind(this);
        this.getFlightById = this.getFlightById.bind(this);
        this.deleteFlightById = this.deleteFlightById.bind(this);
        this.updateFlightById = this.updateFlightById.bind(this);
    }
    getAllFlights() {
        return __awaiter(this, void 0, void 0, function* () {
            const flights = yield this.flightRepository.getAllFlights();
            return flights;
        });
    }
    createFlight(flight) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.flightRepository.createflight(flight);
        });
    }
    getFlightById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const flight = yield this.flightRepository.getFlightById(id);
            return flight;
        });
    }
    updateFlightById(id, flight) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.flightRepository.updateFlightById(id, flight);
        });
    }
    deleteFlightById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.flightRepository.deleteFlightById(id);
        });
    }
};
exports.FlightService = FlightService;
exports.FlightService = FlightService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("IFlightRepository")),
    __metadata("design:paramtypes", [flight_repository_1.default])
], FlightService);
