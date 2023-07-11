import { classNames } from 'shared/lib/classNames/classNames';

import { ButtonHTMLAttributes, memo } from 'react';
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
  disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    square,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const themes = wrapInArray(theme);

  const mods = {
    [styles.square]: square,
    [styles.disabled]: disabled,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(
        [styles.root, className, ...themes.map((themeValue) => styles[themeValue]), styles[size]],
        mods,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
});
