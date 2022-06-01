import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import cn from 'classnames';
import classes from './style.module.css';

import Logo from '../../../utils/image/clouddrive.png';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <Header>
        <Link to='/login'>
          <Button text='Войти' kind='grey' />
        </Link>
      </Header>
      <div className={cn(classes.main)}>
        <div>
          <h1 className={cn(classes.title)}>
            Храните все свои файлы в одном месте
          </h1>
          <Link to='/registration'>
            <Button text='Завести Диск' kind='main' />
          </Link>
        </div>
        <img src={Logo} alt='logo' />
      </div>
    </>
  );
};

export default Main;
