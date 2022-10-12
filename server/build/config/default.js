"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;
exports.default = {
    port: 1234,
    dbUser: DB_USER,
    dbPassword: DB_PASSWORD,
    dbName: DB_NAME,
    host: "localhost",
};
