import React from 'react';
import { IInput } from './input.props';
import cn from 'classnames';
import './style.module.css';

const Input = ({ className, ...props }: IInput) => <input className={cn(className)} {...props} />

export default Input;