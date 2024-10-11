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
exports.RoundService = void 0;
// import { IroundService } from "../interfaces/round.interface";
// import { IroundRepository } from "../interfaces/round.interface";
const tsyringe_1 = require("tsyringe");
const round_repository_1 = __importDefault(require("../repositories/round.repository"));
tsyringe_1.container.register("IroundRepository", {
    useClass: round_repository_1.default,
});
let RoundService = class RoundService {
    constructor(roundRepository) {
        this.roundRepository = roundRepository;
        this.getAllRounds = this.getAllRounds.bind(this);
        this.createRound = this.createRound.bind(this);
        this.getRoundById = this.getRoundById.bind(this);
        this.deleteRoundById = this.deleteRoundById.bind(this);
        this.updateRoundById = this.updateRoundById.bind(this);
        this.createScore = this.createScore.bind(this);
    }
    getAllRounds() {
        return __awaiter(this, void 0, void 0, function* () {
            const Rounds = yield this.roundRepository.getAllRounds();
            return Rounds;
        });
    }
    createScore(score) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.roundRepository.createScore(score);
        });
    }
    createRound(round) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.roundRepository.createRound(round);
        });
    }
    getRoundById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const Round = yield this.roundRepository.getRoundById(id);
            return Round;
        });
    }
    updateRoundById(id, round) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.roundRepository.updateRoundById(id, round);
        });
    }
    deleteRoundById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.roundRepository.deleteRoundById(id);
        });
    }
};
exports.RoundService = RoundService;
exports.RoundService = RoundService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("IroundRepository")),
    __metadata("design:paramtypes", [round_repository_1.default])
], RoundService);
