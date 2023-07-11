import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { AppRoutes } from 'app/providers/router/config/routeConfig';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation(AppRoutes.PROFILE);

  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames([styles.root, className])}>
      <div className={styles.header}>
        <Text title={t('Profile')} />
        <Button theme={ButtonTheme.OUTLINE} className={styles.editBtn}>
          {t('Edit')}
        </Button>
      </div>

      <div className={styles.data}>
        <Input value={data?.first} placeholder={t('Your name')} />
        <Input value={data?.lastname} placeholder={t('Your surname')} />
      </div>
    </div>
  );
};
