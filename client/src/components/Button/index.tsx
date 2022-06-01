import React from 'react';
import cn from 'classnames';
import { IButton } from './button.props';
import classes from './style.module.css';

const Button = ({ text, kind, className, ...props }: IButton) => (
  <button className={cn({
    [classes.main]: kind === 'main',
    [classes.primary]: kind === 'primary',
    [classes.secondary]: kind === 'secondary',
    [classes.grey]: kind === 'grey',
  }, className)} {...props}>
    {text}
  </button>
);

export default Button;
