import { classNames } from 'shared/lib/classNames/classNames';
import {
  ChangeEvent,
  InputHTMLAttributes,
  SyntheticEvent,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './Input.module.scss';

export enum InputTheme {
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  onChange?: (value: string) => void;
  theme?: InputTheme;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    theme = InputTheme.BACKGROUND,
    autoFocus,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onSelect = (e: SyntheticEvent<HTMLInputElement, Event>) => {
    setCaretPosition((e.target as HTMLInputElement).selectionStart || 0);
  };

  return (
    <div className={classNames([className, styles.inputWrapper])}>
      {placeholder && <div className={styles.placeholder}>{`${placeholder} >`}</div>}

      <div className={styles.caretWrapper}>
        <input
          ref={ref}
          className={classNames([styles.root, styles[theme]])}
          type={type}
          value={value || ''}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
        />

        {isFocused && (
          <span
            className={classNames([styles.caret, styles[theme]])}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  );
});
