import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames([styles.root, className])}>
      <Input autoFocus type="text" className={styles.input} placeholder={t('Enter username')} />
      <Input type="text" className={styles.input} placeholder={t('Enter password')} />

      <Button className={styles.loginBtn} theme={ButtonTheme.OUTLINE}>
        {t('Enter')}
      </Button>
    </div>
  );
};
