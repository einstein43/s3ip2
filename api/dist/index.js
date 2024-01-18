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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var tsyringe_1 = require("tsyringe");
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var golfer_controller_1 = require("./controllers/golfer.controller");
var round_controller_1 = require("./controllers/round.controller");
var flight_controller_1 = require("./controllers/flight.controller");
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.options("*", (0, cors_1.default)());
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"], // toegestane headers
}));
express_1.default.json();
app.use((0, cors_1.default)());
app.options("*", (0, cors_1.default)());
var golferController = tsyringe_1.container.resolve(golfer_controller_1.GolferController);
var roundController = tsyringe_1.container.resolve(round_controller_1.RoundController);
var flightController = tsyringe_1.container.resolve(flight_controller_1.FlightController);
{
    /* GOLFER ENDPOINTS */
}
app.post("/register", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, golferController.createGolfer(req, res)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
app.post("/login", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, golferController.login(req, res)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
app.get("/golfer/all", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, golferController.getAllGolfers(req, res)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
app.put("/golfer/update", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, golferController.updateGolferById(req, res)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
app.delete("/golfer/delete", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, golferController.deleteGolferById(req, res)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
app.get("/golfer/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var golferId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                golferId = parseInt(req.params.id);
                return [4 /*yield*/, golferController.getGolferById(golferId, res)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
{
    /* ROUND ENDPOINTS */
}
app.get("/rounds/all", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, roundController.getAllRounds(req, res)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
app.post("/rounds/new", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, roundController.createRound(req, res)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
app.put("/rounds/update", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, roundController.updateRoundById(req, res)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
app.delete("/rounds/delete", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, roundController.deleteRoundById(req, res)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
{
    /* FLIGHT ENDPOINTS */
}
app.get("flights/all", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, flightController.getAllFlights(req, res)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
app.post("flights/new", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, flightController.createFlight(req, res)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
app.put("flights/update", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, flightController.updateFlightById(req, res)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
app.delete("flights/delete", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, flightController.deleteFlightById(req, res)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
app.listen(3001, function () { return console.log("app listening on port 3001"); });
