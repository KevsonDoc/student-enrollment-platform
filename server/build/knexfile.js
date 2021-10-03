"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Update with your config settings.
var path_1 = __importDefault(require("path"));
module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: path_1.default.resolve(__dirname, 'src', 'database', 'database.sqlite')
        },
        migrations: {
            directory: path_1.default.resolve(__dirname, 'src', 'database', 'migrations')
        },
    },
    production: {
        client: 'postgresql',
        connection: {
            database: 'student',
            user: 'postgres',
            password: 'root',
        },
        migrations: {
            directory: path_1.default.resolve(__dirname, 'src', 'database', 'migrations')
        }
    }
};
