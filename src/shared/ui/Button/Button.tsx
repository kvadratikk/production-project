import { classNames } from 'shared/lib/classNames/classNames';

import { ButtonHTMLAttributes, FC } from 'react';
import { wrapInArray } from 'shared/lib/wrapInArray/wrapInArray';
import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  DEFAULT = 'default',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  L = 'size_l',
  M = 'size_m',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme | ButtonTheme[];
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ButtonTheme.CLEAR,
  square,
  size = ButtonSize.M,
  ...otherProps
}) => {
  const themes = wrapInArray(theme);

  const mods = {
    [styles.square]: square,
  };

  return (
    <button
      type="button"
      className={classNames(
        [styles.root, className, ...themes.map((themeValue) => styles[themeValue]), styles[size]],
        mods,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
