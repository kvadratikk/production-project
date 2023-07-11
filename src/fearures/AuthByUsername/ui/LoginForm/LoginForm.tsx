import { KeyboardEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ReducersList, useModuleLoader } from 'shared/lib/hooks/useModuleLoader/useModuleLoader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

const reducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useModuleLoader({ reducers, removeAfterUnmount: true });

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
      .unwrap()
      .then(() => navigate('/profile'))
      .catch(() => 'error');
  }, [dispatch, navigate, password, username]);

  const handleEnterPress = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter') onLoginClick();
    },
    [onLoginClick],
  );

  return (
    <div className={classNames([styles.root, className])}>
      <Text title={t('Authorization form')} />
      {error && (
        <Text text={t('You entered an incorrect username or password')} theme={TextTheme.ERROR} />
      )}

      <Input
        autoFocus
        type="text"
        className={styles.input}
        placeholder={t('Enter username')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={styles.input}
        placeholder={t('Enter password')}
        onChange={onChangePassword}
        value={password}
      />

      <Button
        className={styles.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
        onKeyPress={handleEnterPress}
      >
        {t('Enter')}
      </Button>
    </div>
  );
});

export default LoginForm;
