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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightController = void 0;
const tsyringe_1 = require("tsyringe");
const flight_service_1 = require("../services/flight.service");
tsyringe_1.container.register("IFlightService", {
    useClass: flight_service_1.FlightService,
});
let FlightController = class FlightController {
    constructor(flightService) {
        this.flightService = flightService;
        this.getAllFlights = this.getAllFlights.bind(this);
        this.getFlightById = this.getFlightById.bind(this);
        this.updateFlightById = this.updateFlightById.bind(this);
        this.deleteFlightById = this.deleteFlightById.bind(this);
        this.createFlight = this.createFlight.bind(this);
    }
    getAllFlights(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const flights = yield this.flightService.getAllFlights();
            res.status(200).send(flights);
        });
    }
    createFlight(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const flight = req.body;
            yield this.flightService.createFlight(flight);
            res.status(200).send("controller succes -> id: " + flight.id);
        });
    }
    getFlightById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.body.id;
            const flight = yield this.flightService.getFlightById(id);
            res.status(200).send(flight);
        });
    }
    updateFlightById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.body.id;
            const flight = req.body.flight;
            yield this.flightService.updateFlightById(id, flight);
            res.status(200).send("flight updated with id: " + id);
        });
    }
    deleteFlightById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.body.id;
            yield this.flightService.deleteFlightById(id);
            res.status(200).send("flight deleted with id: " + id);
        });
    }
};
exports.FlightController = FlightController;
exports.FlightController = FlightController = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("IFlightService")),
    __metadata("design:paramtypes", [flight_service_1.FlightService])
], FlightController);
