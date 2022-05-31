"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    space: {
        type: Number,
        default: 1024 ** 3 * 10,
    },
    used: {
        type: Number,
        default: 0,
    },
    files: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'File',
        },
    ],
}, {
    timestamps: true,
});
const User = (0, mongoose_1.model)('User', UserSchema);
exports.default = User;
