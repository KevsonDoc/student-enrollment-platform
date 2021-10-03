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
        while (_) try {
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
var uuid_1 = require("uuid");
var connection_1 = __importDefault(require("../database/connection"));
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.validationEmail = function (email) {
        var validationEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        return validationEmail.test(email);
    };
    Student.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var students;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, connection_1.default)('student').select('*')];
                    case 1:
                        students = _a.sent();
                        return [2 /*return*/, response.status(200).json(students)];
                }
            });
        });
    };
    Student.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, cpf, matricula, isMatricula, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, email = _a.email, cpf = _a.cpf;
                        if (!name)
                            return [2 /*return*/, response.status(400).json('Prenncha o campo de nome')];
                        if (!email || !(new Student().validationEmail(email)))
                            return [2 /*return*/, response.status(400).json('E-mail inválido')];
                        if (!cpf || cpf.length >= 12 || cpf.length <= 10)
                            return [2 /*return*/, response.status(400).json('CPF inválido')];
                        matricula = (0, uuid_1.v4)();
                        return [4 /*yield*/, (0, connection_1.default)('student').where('matricula', matricula).first()];
                    case 1:
                        isMatricula = _b.sent();
                        if (isMatricula)
                            return [2 /*return*/, response.status(400).json('Essa matrícula já existe inválido')];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, (0, connection_1.default)('student').insert({ name: name, email: email, cpf: cpf, matricula: matricula })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, response.status(201).json({ message: "Aluno criado", student: { name: name, email: email, cpf: cpf, matricula: matricula } })];
                    case 4:
                        error_1 = _b.sent();
                        return [2 /*return*/, response.status(500).json("Ops! Houve um erro. Não se preucupe estamos trabalhando para resolver")];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Student.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, student;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        return [4 /*yield*/, (0, connection_1.default)('student').where({ matricula: id }).first()];
                    case 1:
                        student = _a.sent();
                        if (!student)
                            return [2 /*return*/, response.status(404).json('Aluno não encontrado')];
                        return [2 /*return*/, response.status(200).json(student)];
                }
            });
        });
    };
    Student.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, name, email, student, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = request.params.id;
                        _a = request.body, name = _a.name, email = _a.email;
                        if (!id)
                            return [2 /*return*/, response.status(404).json('Nenhum Aluno encontrado')];
                        return [4 /*yield*/, (0, connection_1.default)('student').where({ matricula: id }).first()];
                    case 1:
                        student = _b.sent();
                        if (!name)
                            return [2 /*return*/, response.status(400).json('Prenncha o campo de nome')];
                        if (!email || !(new Student().validationEmail(email)))
                            return [2 /*return*/, response.status(400).json('E-mail inválido')];
                        if (!student)
                            return [2 /*return*/, response.status(404).json('Aluno Não encontrado')];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, (0, connection_1.default)('student').where({ matricula: id }).update({ name: name, email: email })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, response.status(200).json('Informações de aluno foram atualizadas')];
                    case 4:
                        error_2 = _b.sent();
                        return [2 /*return*/, response.status(500).json("Ops! Houve um erro. Não se preucupe estamos trabalhando para resolver")];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Student.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, student, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        if (!id)
                            return [2 /*return*/, response.status(404).json('Nenhum Aluno encontrado')];
                        return [4 /*yield*/, (0, connection_1.default)('student').where({ matricula: id }).first()];
                    case 1:
                        student = _a.sent();
                        if (!student)
                            return [2 /*return*/, response.status(404).json('Aluno Não encontrado')];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, (0, connection_1.default)('student').where({ matricula: id }).delete()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, response.status(200).json('Informações de aluno foram deletadas')];
                    case 4:
                        error_3 = _a.sent();
                        return [2 /*return*/, response.status(500).json("Ops! Houve um erro. Não se preucupe estamos trabalhando para resolver")];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return Student;
}());
exports.default = Student;
