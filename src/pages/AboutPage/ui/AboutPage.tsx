import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return <div>{t('About')}</div>;
};

export default AboutPage;
