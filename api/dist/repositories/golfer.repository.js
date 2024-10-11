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
class GolferRepository {
    constructor() { }
    login(ngf) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const golfer = yield prisma.golfers.findFirst({
                    where: {
                        ngf: ngf,
                    },
                });
                if (golfer) {
                    console.log("repository: golfer found, returning hashed password");
                    console.log(golfer);
                    const password = golfer.password || "test wrong";
                    ;
                    console.log(password);
                    return password;
                }
                else {
                    console.error("Golfer not found");
                    return "Golfer not found";
                }
            }
            catch (error) {
                console.error("An error occurred:", error);
                return "password incorrect";
            }
        });
    }
    createGolfer(ngf, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newGolfer = yield prisma.golfers.create({
                    data: {
                        ngf: ngf,
                        password: password,
                    },
                });
                console.log("repository: golfer created");
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getAllGolfers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const golfers = yield prisma.golfers.findMany({});
                console.log("repository: golfers retrieved");
                return golfers;
            }
            catch (error) {
                console.error("could not find golfers in repository");
                throw new Error("Failed to retrieve golfers");
            }
        });
    }
    getGolferById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(id);
                const golfer = yield prisma.golfers.findUnique({
                    where: {
                        id: id,
                    },
                });
                console.log("golfer retrieved with id" + id);
                console.log(golfer);
                return golfer;
            }
            catch (error) {
                console.error("could not find golfers in repository");
                throw new Error("Failed to retrieve golfers");
            }
        });
    }
    getGolferByNgf(ngf) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(ngf);
                const golfer = yield prisma.golfers.findFirst({
                    where: {
                        ngf: ngf,
                    },
                });
                console.log("golfer retrieved with ngf" + ngf);
                console.log(golfer);
                return golfer;
            }
            catch (error) {
                console.error("could not find golfers in repository");
                throw new Error("Failed to retrieve golfers");
            }
        });
    }
    updateGolferById(id, golfer) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!golfer.name)
                    throw new Error("No golfer provided");
                if (!golfer.golf_rounds)
                    throw new Error("No golf rounds provided");
                if (!golfer.id)
                    throw new Error("No id provided");
                const updatedGolfer = yield prisma.golfers.update({
                    where: {
                        id: id,
                    },
                    data: {
                        id: golfer.id,
                        name: golfer.name,
                        handicap: golfer.handicap || 0,
                        age: golfer.age || 0,
                        homecourse: golfer.homecourse || "null",
                        country: golfer.country || "null",
                        golf_rounds: {},
                    },
                });
                console.log("repository: golfer updated");
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    deleteGolferById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedGolfer = yield prisma.golfers.delete({
                    where: {
                        id: id,
                    },
                });
                console.log(deletedGolfer);
            }
            catch (error) {
                console.error("could not delete golfer in repository");
                throw new Error("Failed to delete golfer");
            }
            console.log("repository: golfer deleted");
        });
    }
}
exports.default = GolferRepository;
