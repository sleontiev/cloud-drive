import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from '../../components/Button';
import Input from '../../components/Input';
import AnimateButton from '../../components/AnimateButton';
import Wrapper from '../../components/Wrapper';

import classes from './style.module.css';
import cn from 'classnames';

interface ILogin {
  email: string;
  password: string;
}

const login = async (data: ILogin) => {
  const response = await axios.post(
    'http://localhost:5000/api/auth/login',
    data
  );
  localStorage.setItem('token', response.data.token);
};

const Login = () => {
  const [data, setData] = useState<ILogin>({
    email: '',
    password: '',
  });
  return (
    <Wrapper>
      <Link to='/'>
        <AnimateButton />
      </Link>
      <span className={cn(classes.logo)}>Cloud Drive</span>
      <Input
        type='text'
        className={classes.login__input}
        placeholder='Адрес электронной почты'
        onChange={(e) => {
          setData({
            ...data,
            email: e.target.value,
          });
        }}
      />
      <Input
        type='password'
        className={classes.login__input}
        placeholder='Пароль'
        onChange={(e) => {
          setData({
            ...data,
            password: e.target.value,
          });
        }}
      />
      <Button
        text='Войти'
        kind='primary'
        className={classes.login__button}
        onClick={() => login(data)}
      />
      <Link to='/registration'>
        <Button
          className={cn(classes.link)}
          text='Создать диск'
          kind='secondary'
        />
      </Link>
    </Wrapper>
  );
};

export default Login;
