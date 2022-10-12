"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const server = (0, express_1.default)();
server.use(express_1.default.urlencoded({ extended: true }));
server.use((0, cors_1.default)({ credentials: true, origin: "*", methods: "GET,HEAD,PUT,PATCH,POST,DELETE", }));
exports.default = server;
