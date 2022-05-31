"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbConnect = {
    connect: (DB_HOST) => (0, mongoose_1.connect)(DB_HOST),
    close: () => mongoose_1.connection.close(),
};
exports.default = dbConnect;
