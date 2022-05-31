"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const db_connection_1 = __importDefault(require("../utils/db_connection"));
(0, dotenv_1.config)();
const auth_1 = __importDefault(require("./routes/auth"));
const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/auth', auth_1.default);
const startServer = () => {
    try {
        db_connection_1.default.connect(DB_HOST);
        app.listen(PORT, () => {
            console.log('App is running...');
        });
    }
    catch (e) {
        if (typeof e === 'string') {
            throw new Error(e);
        }
    }
};
startServer();
