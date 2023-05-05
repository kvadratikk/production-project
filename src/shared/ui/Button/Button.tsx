import { classNames } from 'shared/lib/classNames/classNames';

import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  DEFAULT = 'default',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton | ThemeButton[];
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ThemeButton.CLEAR,
  ...otherProps
}) => {
  const themes = typeof theme === 'string' ? [theme] : theme;

  return (
    <button
      type="button"
      className={classNames([
        styles.root,
        className,
        ...themes.map((themeValue) => styles[themeValue]),
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
