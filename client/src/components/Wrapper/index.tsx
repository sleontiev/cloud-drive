import React, { ReactNode } from 'react';
import cn from 'classnames';
import classes from './style.module.css';

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className={cn(classes.wrapper)}>{children}</div>
);

export default Wrapper;