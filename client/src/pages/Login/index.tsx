import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import AnimateButton from '../../components/AnimateButton';

import classes from './style.module.css';
import cn from 'classnames';
import Wrapper from '../../components/Wrapper';

const Login = () => {
  const [data, setData] = useState<{ email: string; password: string }>({
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
            email: e.target.value
          })
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
          })
        }}
      />
      <Button text='Войти' kind='primary' className={classes.login__button} />
      <Link to='/registration'><Button className={cn(classes.link)} text='Создать диск' kind='secondary' /></Link>
    </Wrapper>
  );
};

export default Login;
