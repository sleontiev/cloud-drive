import React, { ReactNode } from 'react';
import cn from 'classnames';
import classes from './style.module.css';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Header = ({ children }: {children: ReactNode}) => {
  return (
    <div className={cn(classes.header)}>
      <span className={cn(classes.logo)}>Cloud Drive</span>
      {children}
    </div>
  );
};

export default Header;
