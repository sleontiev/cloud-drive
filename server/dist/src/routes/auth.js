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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const express_validator_1 = require("express-validator");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const router = (0, express_1.Router)();
router.post('/registration', [
    (0, express_validator_1.check)('email', 'Неккоректный email').isEmail(),
    (0, express_validator_1.check)('password', 'Пароль должен быть длинее, чем 6 символов').isLength({
        min: 6,
    }),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, surname, email, password } = req.body;
        const find_user = yield User_1.default.findOne({ email });
        if (find_user) {
            return res.status(400).json({ message: 'Пользователь уже существует' });
        }
        const hashPassword = yield bcrypt_1.default.hash(password, 10);
        const new_user = new User_1.default({
            name,
            surname,
            email,
            password: hashPassword,
        });
        yield new_user.save();
        return res.json({ message: 'Пользователь был создан' });
    }
    catch (e) {
        if (typeof e === 'string') {
            res.send({ message: 'Error' });
        }
    }
}));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield User_1.default.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' });
        }
        const valid_password = yield bcrypt_1.default.compareSync(password, user.password);
        if (!valid_password) {
            return res.status(400).json({ message: 'Пароль неверный' });
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET);
        return res.json({
            token,
            user: {
                name: user.name,
                surname: user.surname,
                email: user.email,
            },
        });
    }
    catch (e) {
        if (typeof e === 'string') {
            res.send({ message: 'Error' });
        }
    }
}));
exports.default = router;
