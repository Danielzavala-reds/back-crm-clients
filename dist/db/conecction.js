"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize(process.env.DATABASE, process.env.DB_USERNAME, 'process.env.DB_PASSWORD', {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    // logging: false
});
exports.default = db;
//# sourceMappingURL=conecction.js.map