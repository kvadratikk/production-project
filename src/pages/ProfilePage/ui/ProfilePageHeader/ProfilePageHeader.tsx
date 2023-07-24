import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { AppRoutes } from 'app/providers/router/config/routeConfig';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions, updateProfileData } from 'entities/Profile';
import styles from './ProfilePageHeader.module.scss';

export const ProfilePageHeader = () => {
  const { t } = useTranslation(AppRoutes.PROFILE);

  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <Text title={t('Profile')} />

      <div className={styles.btns}>
        {readonly ? (
          <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
            {t('Edit')}
          </Button>
        ) : (
          <>
            <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
              {t('Reset')}
            </Button>
            <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
              {t('Save')}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
