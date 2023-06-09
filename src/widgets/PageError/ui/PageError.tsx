import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames([styles.root, className])}>
      <p>{t('Unexpected error')}</p>
      <Button onClick={reloadPage} theme={ButtonTheme.DEFAULT}>
        {t('Reload page')}
      </Button>
    </div>
  );
};
