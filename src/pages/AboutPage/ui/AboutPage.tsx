import { AppRoutes } from 'app/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation(AppRoutes.ABOUT);

  return <div>{t('About')}</div>;
};

export default AboutPage;
