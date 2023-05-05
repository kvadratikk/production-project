import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({ className, children, theme = ThemeButton.CLEAR, ...otherProps }) => {
  return (
    <button className={classNames([styles.root, className, styles[theme]])} {...otherProps}>
      {children}
    </button>
  )
}
