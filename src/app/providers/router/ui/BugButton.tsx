import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

export const BugButton = () => {
  const { t } = useTranslation();

  const [error, setError] = useState(false);

  const throwError = () => setError(true);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <Button onClick={throwError} theme={ButtonTheme.DEFAULT}>
      {t('throw error')}
    </Button>
  );
};
