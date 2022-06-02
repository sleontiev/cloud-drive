import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Wrapper from '../../components/Wrapper';
import classes from './style.module.css';
import axios from 'axios';

interface IRegistration {
  name?: string;
  surname?: string;
  email: string;
  password: string;
}

const registration = async (data: IRegistration) => {
  const response = await axios.post(
    'http://localhost:5000/api/auth/registration',
    {
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: data.password,
    }
  );
  console.log(response.data);
};

const Registration = () => {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <Wrapper>
      <h2 className={cn(classes.title)}>Регистрация</h2>
      <Input
        placeholder='Имя'
        type='text'
        className={cn(classes.input)}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder='Фамилия'
        type='text'
        className={cn(classes.input)}
        onChange={(e) => setSurname(e.target.value)}
      />
      <Input
        placeholder='Адрес электронной почты'
        type='text'
        className={cn(classes.input)}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder='Пароль'
        type='password'
        className={cn(classes.input)}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        text='Зарегистрироваться'
        kind='primary'
        onClick={() => registration({ name, surname, email, password })}
      />
      <span className={cn(classes.span)}>
        Уже есть аккаунт? Вы можете <Link to='/login'>войти</Link>
      </span>
    </Wrapper>
  );
};

export default Registration;
