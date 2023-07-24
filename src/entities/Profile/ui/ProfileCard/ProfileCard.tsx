import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/classNames/classNames';

import { AppRoutes } from 'app/providers/router/config/routeConfig';
import { Profile } from 'entities/Profile/model/types/profile';
import { Input } from 'shared/ui/Input/Input';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';

import { Country } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CountrySelect } from 'entities/Country/ui/CountrySelect/CountrySelect';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
  readonly?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    onChangeFirstName,
    onChangeLastName,
    readonly,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
  } = props;

  const mods: Mods = {
    [styles.editing]: !readonly,
  };

  const { t } = useTranslation(AppRoutes.PROFILE);

  if (isLoading) {
    return (
      <div className={classNames([styles.root, className])}>
        <PageLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames([styles.root, className, styles.error])}>
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          title={t('Profile Error')}
          text={t('Try Refresh')}
        />
      </div>
    );
  }

  return (
    <div className={classNames([styles.root, className], mods)}>
      <div className={styles.data}>
        {data?.avatar && (
          <div className={styles.avatar}>
            <Avatar src={data?.avatar} alt={t('avatar')} />
          </div>
        )}

        <Input
          value={data?.first}
          placeholder={t('Your name')}
          onChange={onChangeFirstName}
          readOnly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Your surname')}
          onChange={onChangeLastName}
          readOnly={readonly}
        />
        <Input
          value={data?.age}
          placeholder={t('Your age')}
          onChange={onChangeAge}
          readOnly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t('Your city')}
          onChange={onChangeCity}
          readOnly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t('Your Username')}
          onChange={onChangeUsername}
          readOnly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Your link for avatar')}
          onChange={onChangeAvatar}
          readOnly={readonly}
        />
        <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
        <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
      </div>
    </div>
  );
};
