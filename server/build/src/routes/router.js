"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var StudentController_1 = __importDefault(require("../app/StudentController"));
var Routes = /** @class */ (function () {
    function Routes() {
        this.routes = (0, express_1.Router)();
        this.student = new StudentController_1.default();
        this.routes.get('/', this.student.index);
        this.routes.get('/:id', this.student.show);
        this.routes.post('/', this.student.create);
        this.routes.put('/:id', this.student.update);
        this.routes.delete('/:id', this.student.delete);
    }
    return Routes;
}());
exports.default = Routes;
