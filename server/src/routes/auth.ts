import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { check, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const router = Router();

router.post(
  '/registration',
  [
    check('email', 'Неккоректный email').isEmail(),
    check('password', 'Пароль должен быть длинее, чем 6 символов').isLength({
      min: 6,
    }),
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { name, surname, email, password } = req.body;
      const find_user = await User.findOne({ email });
      if (find_user) {
        return res.status(400).json({ message: 'Пользователь уже существует' });
      }
      const hashPassword = await bcrypt.hash(password, 10);
      const new_user = new User({
        name,
        surname,
        email,
        password: hashPassword,
      });
      await new_user.save();
      return res.json({ message: 'Пользователь был создан' });
    } catch (e: unknown) {
      if (typeof e === 'string') {
        res.send({ message: 'Error' });
      }
    }
  }
);

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }
    const valid_password = await bcrypt.compareSync(password, user.password);
    if (!valid_password) {
      return res.status(400).json({ message: 'Пароль неверный' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string);
    return res.json({
      token,
      user: {
        name: user.name,
        surname: user.surname,
        email: user.email,
      },
    });
  } catch (e: unknown) {
    if (typeof e === 'string') {
      res.send({ message: 'Error' });
    }
  }
});

export default router;
