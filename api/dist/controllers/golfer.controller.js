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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GolferController = void 0;
var tsyringe_1 = require("tsyringe");
var golfer_service_1 = require("../services/golfer.service");
tsyringe_1.container.register("IGolferService", {
    useClass: golfer_service_1.GolferService,
});
var GolferController = /** @class */ (function () {
    function GolferController(golferService) {
        this.golferService = golferService;
        this.getAllGolfers = this.getAllGolfers.bind(this);
        this.getGolferById = this.getGolferById.bind(this);
        this.updateGolferById = this.updateGolferById.bind(this);
        this.deleteGolferById = this.deleteGolferById.bind(this);
        this.createGolfer = this.createGolfer.bind(this);
        this.login = this.login.bind(this);
    }
    GolferController.prototype.login = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var ngf, password, loginMessage, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        ngf = parseInt(req.body.ngf);
                        password = req.body.password;
                        return [4 /*yield*/, this.golferService.login(ngf, password)];
                    case 1:
                        loginMessage = _a.sent();
                        res.status(200).send(loginMessage);
                        console.log("controller: golfer logged in");
                        return [2 /*return*/, loginMessage];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        res.status(500).send("error in controller");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GolferController.prototype.getAllGolfers = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var golfers, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.golferService.getAllGolfers()];
                    case 1:
                        golfers = _a.sent();
                        res.status(200).json(golfers);
                        console.log("controller: golfers retrieved");
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.error(error_2);
                        res.status(500).send("Internal Server Error");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GolferController.prototype.getGolferById = function (id, res) {
        return __awaiter(this, void 0, void 0, function () {
            var golfer, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.golferService.getGolferById(id)];
                    case 1:
                        golfer = _a.sent();
                        res.status(200).send(golfer);
                        console.log("controller: unique golfer retrieved   id=" + id);
                        return [2 /*return*/, golfer];
                    case 2:
                        error_3 = _a.sent();
                        console.error(error_3);
                        res.status(500).send("error in controller");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GolferController.prototype.updateGolferById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, golfer, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.body.id;
                        golfer = req.body;
                        return [4 /*yield*/, this.golferService.updateGolferById(id, golfer)];
                    case 1:
                        _a.sent();
                        res.status(200).send("golfer updated with id: " + golfer.id);
                        console.log("controller: golfer updated   id=" + id);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.error(error_4);
                        res.status(500).send("Internal Server Error");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GolferController.prototype.deleteGolferById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.body.id;
                        return [4 /*yield*/, this.golferService.deleteGolferById(id)];
                    case 1:
                        _a.sent();
                        res.status(200).send("controller: golfer deleted with id:  " + id);
                        console.log("controller: golfer deleted with id:  " + id);
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.error(error_5);
                        res.status(500).send("Internal Server Error");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GolferController.prototype.createGolfer = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var ngf, password, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        ngf = parseInt(req.body.ngf);
                        password = req.body.password;
                        return [4 /*yield*/, this.golferService.createGolfer(ngf, password)];
                    case 1:
                        _a.sent();
                        res.status(200).send("controller: golfer created   id= " + ngf);
                        console.log("controller: golfer created   id= " + password);
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        console.error(error_6);
                        res.status(500).send("Internal Server Error");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GolferController = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("IGolferService")),
        __metadata("design:paramtypes", [golfer_service_1.GolferService])
    ], GolferController);
    return GolferController;
}());
exports.GolferController = GolferController;
