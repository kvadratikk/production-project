import { BugButton } from 'app/providers/router';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('Main Page')}
      <BugButton />
    </div>
  );
};

export default MainPage;
