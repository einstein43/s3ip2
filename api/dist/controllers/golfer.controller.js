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
exports.GolferController = void 0;
const tsyringe_1 = require("tsyringe");
const golfer_service_1 = require("../services/golfer.service");
tsyringe_1.container.register("IGolferService", {
    useClass: golfer_service_1.GolferService,
});
let GolferController = class GolferController {
    constructor(golferService) {
        this.golferService = golferService;
        this.getAllGolfers = this.getAllGolfers.bind(this);
        this.getGolferById = this.getGolferById.bind(this);
        this.updateGolferById = this.updateGolferById.bind(this);
        this.deleteGolferById = this.deleteGolferById.bind(this);
        this.createGolfer = this.createGolfer.bind(this);
        this.getGolferByNgf = this.getGolferByNgf.bind(this);
        this.login = this.login.bind(this);
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ngf = parseInt(req.body.ngf);
                const password = req.body.password;
                const loginMessage = yield this.golferService.login(ngf, password);
                res.status(200).send(loginMessage);
                console.log("controller: golfer logged in");
                return loginMessage;
            }
            catch (error) {
                console.error(error);
                res.status(500).send("error in controller");
            }
        });
    }
    getAllGolfers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const golfers = yield this.golferService.getAllGolfers();
                res.status(200).json(golfers);
                console.log("controller: golfers retrieved");
            }
            catch (error) {
                console.error(error);
                res.status(500).send("Internal Server Error");
            }
        });
    }
    getGolferById(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const golfer = yield this.golferService.getGolferById(id);
                res.status(200).send(golfer);
                console.log("controller: unique golfer retrieved   id=" + id);
                return golfer;
            }
            catch (error) {
                console.error(error);
                res.status(500).send("error in controller");
            }
        });
    }
    getGolferByNgf(ngf, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const golfer = yield this.golferService.getGolferByNgf(ngf);
                res.status(200).send(golfer);
                console.log("controller: unique golfer retrieved   ngf=" + golfer.ngf);
                return golfer;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    updateGolferById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.body.id;
                const golfer = req.body;
                yield this.golferService.updateGolferById(id, golfer);
                res.status(200).send("golfer updated with id: " + golfer.id);
                console.log("controller: golfer updated   id=" + id);
            }
            catch (error) {
                console.error(error);
                res.status(500).send("Internal Server Error");
            }
        });
    }
    deleteGolferById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.body.id;
                yield this.golferService.deleteGolferById(id);
                res.status(200).send("controller: golfer deleted with id:  " + id);
                console.log("controller: golfer deleted with id:  " + id);
            }
            catch (error) {
                console.error(error);
                res.status(500).send("Internal Server Error");
            }
        });
    }
    createGolfer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ngf = parseInt(req.body.ngf);
                const password = req.body.password;
                yield this.golferService.createGolfer(ngf, password);
                res.status(200).send("controller: golfer created   id= " + ngf);
                console.log("controller: golfer created   id= " + password);
            }
            catch (error) {
                console.error(error);
                res.status(500).send("Internal Server Error");
            }
        });
    }
};
exports.GolferController = GolferController;
exports.GolferController = GolferController = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("IGolferService")),
    __metadata("design:paramtypes", [golfer_service_1.GolferService])
], GolferController);
