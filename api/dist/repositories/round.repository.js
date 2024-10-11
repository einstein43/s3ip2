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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class roundRepository {
    constructor() { }
    getAllRounds() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rounds = yield prisma.golf_scores.findMany({});
                console.log("rounds retrieved");
                return rounds;
            }
            catch (error) {
                console.error("could not find rounds in repository");
                throw new Error("Failed to retrieve rounds");
            }
        });
    }
    getRoundById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(id);
                const round = yield prisma.golf_rounds.findUnique({
                    where: {
                        id: parseInt(id),
                    },
                });
                console.log("round retrieved with id" + id);
                return round;
            }
            catch (error) {
                console.error("could not find rounds in repository");
                throw new Error("Failed to retrieve rounds");
            }
        });
    }
    createScore(score) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!score.golf_round_id)
                    throw new Error("No score provided");
                if (!score.golfer_id)
                    throw new Error("No golfers provided");
                console.log("score created");
                const newScore = yield prisma.golf_scores.create({
                    data: {
                        id: (_a = score.golf_round_id) !== null && _a !== void 0 ? _a : undefined,
                        golfer_id: score.golfer_id,
                        hole1: score.hole1,
                        hole2: score.hole2,
                        hole3: score.hole3,
                        hole4: score.hole4,
                        hole5: score.hole5,
                        hole6: score.hole6,
                        hole7: score.hole7,
                        hole8: score.hole8,
                        hole9: score.hole9,
                        hole10: score.hole10,
                        hole11: score.hole11,
                        hole12: score.hole12,
                        hole13: score.hole13,
                        hole14: score.hole14,
                        hole15: score.hole15,
                        hole16: score.hole16,
                        hole17: score.hole17,
                        hole18: score.hole18,
                    },
                });
            }
            catch (error) {
                console.error("could not create score in repository");
                throw new Error("Failed to create score in repository");
            }
        });
    }
    createRound(round) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!round.id)
                    throw new Error("No round provided");
                if (!round.golfer_id)
                    throw new Error("No golfers provided");
                console.log("round created");
                const newRound = yield prisma.golf_rounds.create({
                    data: {
                        id: round.id,
                        golfer_id: round.golfer_id,
                        round_id: round.round_id,
                        golfers: round.golfers,
                        golf_scores: round.golf_scores,
                    },
                });
            }
            catch (error) {
                console.error("could not create round in repository");
                throw new Error("Failed to create round");
            }
        });
    }
    updateRoundById(id, round) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    deleteRoundById(id) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = roundRepository;
