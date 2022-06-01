import React from "react";
import cn from 'classnames';
import classes from './style.module.css';
import Arrow from '../../../utils/icons/arrow-left.svg';

const AnimateButton = () => {
  return (
    <div className={cn(classes.button)}>
      <Arrow />
      <span className={cn(classes.button__text)}>Назад</span>
    </div>
  )
}

export default AnimateButton;