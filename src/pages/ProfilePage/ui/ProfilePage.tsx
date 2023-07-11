import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { ReducersList, useModuleLoader } from 'shared/lib/hooks/useModuleLoader/useModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation();

  useModuleLoader({ reducers, removeAfterUnmount: true });

  return <div>{t('Profile Page')}</div>;
};

export default ProfilePage;
