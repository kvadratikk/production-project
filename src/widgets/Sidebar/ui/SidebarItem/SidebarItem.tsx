import { RouteConfig } from 'app/providers/router/config/routeConfig';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useSelector } from 'react-redux';
import { getUser } from 'entities/User';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: RouteConfig;
  isColladsed: boolean;
}

export const SidebarItem = memo(({ item, isColladsed }: SidebarItemProps) => {
  const { path, key, icon, authOnly } = item;

  const { t } = useTranslation();
  const { authData } = useSelector(getUser);

  if (authOnly && !authData) return null;

  return (
    <AppLink
      to={`/${path}`}
      className={classNames(styles.root, { [styles.collapsed]: isColladsed })}
    >
      {icon}
      <div className={styles.text}>{t(String(key))}</div>
    </AppLink>
  );
});
