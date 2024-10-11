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
exports.GolferService = void 0;
// import { IGolferService } from "../interfaces/golfer.interface";
// import { IGolferRepository } from "../interfaces/golfer.interface";
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const golfer_repository_1 = __importDefault(require("../repositories/golfer.repository"));
const bcrypt_1 = __importDefault(require("bcrypt"));
tsyringe_1.container.register("IGolferRepository", {
    useClass: golfer_repository_1.default,
});
let GolferService = class GolferService {
    constructor(golferRepository) {
        this.golferRepository = golferRepository;
        this.getAllGolfers = this.getAllGolfers.bind(this);
        this.createGolfer = this.createGolfer.bind(this);
        this.getGolferById = this.getGolferById.bind(this);
        this.deleteGolferById = this.deleteGolferById.bind(this);
        this.updateGolferById = this.updateGolferById.bind(this);
        this.getGolferByNgf = this.getGolferByNgf.bind(this);
        this.login = this.login.bind(this);
    }
    // GolferService login method
    login(ngf, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const storedHashedPassword = yield this.golferRepository.login(ngf);
                if (!storedHashedPassword) {
                    return "password incorrect";
                }
                const isPasswordValid = yield bcrypt_1.default.compare(password, storedHashedPassword);
                if (isPasswordValid) {
                    return "login successful";
                }
                else {
                    return "password incorrect";
                }
            }
            catch (error) {
                console.error("Error in login:", error);
                return "error in login";
            }
        });
    }
    createGolfer(ngf, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt_1.default.hash(password, 10);
            yield this.golferRepository.createGolfer(ngf, hashedPassword);
            console.log("service: golfer created");
        });
    }
    getAllGolfers() {
        return __awaiter(this, void 0, void 0, function* () {
            const golfers = yield this.golferRepository.getAllGolfers();
            console.log("service: golfers retrieved");
            return golfers;
        });
    }
    getGolferById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const golfer = yield this.golferRepository.getGolferById(id);
            console.log("service: unique golfer retrieved" + golfer);
            return golfer;
        });
    }
    getGolferByNgf(ngf) {
        return __awaiter(this, void 0, void 0, function* () {
            const golfer = yield this.golferRepository.getGolferByNgf(ngf);
            console.log("service: unique ngf golfer retrieved" + golfer);
            return golfer;
        });
    }
    updateGolferById(id, golfer) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.golferRepository.updateGolferById(id, golfer);
            console.log("service: golfer updated");
        });
    }
    deleteGolferById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.golferRepository.deleteGolferById(id);
            console.log("service: golfer deleted");
        });
    }
};
exports.GolferService = GolferService;
exports.GolferService = GolferService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("IGolferRepository")),
    __metadata("design:paramtypes", [golfer_repository_1.default])
], GolferService);
