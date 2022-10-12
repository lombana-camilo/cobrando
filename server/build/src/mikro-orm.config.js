"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const path_1 = __importDefault(require("path"));
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, "./migrations"),
        glob: "!(*.d).{js,ts}",
    },
    dbName: config_1.default.get("dbName"),
    user: config_1.default.get("dbUser"),
    password: config_1.default.get("dbPassword"),
    host: config_1.default.get("host"),
    type: "postgresql",
    debug: process.env.NODE_ENV !== "production",
    entities: ["./build/src/entities/**/*.*", "./entities/**/*.*"],
    seeder: {
        path: path_1.default.join(__dirname, "./seeds"),
        defaultSeeder: "Seed",
        glob: "!(*.d).{js,ts}",
        emit: process.env.NODE_ENV === "production" ? "js" : "ts",
        fileName: (className) => className,
    },
};
