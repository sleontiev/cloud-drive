import React from 'react';
import cn from 'classnames';
import { IButton } from './button.props';
import classes from './style.module.css';

const Button = ({ text, kind, className, ...props }: IButton) => (
  <button className={cn({
    [classes.main]: kind === 'main',
  }, className)} {...props}>
    {text}
  </button>
);

export default Button;
