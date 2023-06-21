import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
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
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
