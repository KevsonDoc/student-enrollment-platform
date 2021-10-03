"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var router_1 = __importDefault(require("./routes/router"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    Server.prototype.middlewares = function () {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    };
    Server.prototype.routes = function () {
        this.app.use(new router_1.default().routes);
    };
    return Server;
}());
http_1.default.createServer(new Server().app).listen(process.env.PORT || 3333, function () {
    console.log('Salyut! Server is running.');
});
