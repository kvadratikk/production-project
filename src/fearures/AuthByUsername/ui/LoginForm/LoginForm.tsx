import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';

import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import styles from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/loginSlice';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const dispatch = useDispatch();

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
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

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
      >
        {t('Enter')}
      </Button>
    </div>
  );
});
