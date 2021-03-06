import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string,
  kind: 'main' | 'primary' | 'secondary' | 'grey',
}