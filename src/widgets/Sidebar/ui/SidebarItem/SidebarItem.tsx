import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
  path: string;
  text: string;
  icon: ReactNode;
  isColladsed: boolean;
}

export const SidebarItem = memo(({ path, text, icon, isColladsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <AppLink
      to={`/${path}`}
      className={classNames(styles.root, { [styles.collapsed]: isColladsed })}
    >
      {icon}
      <div className={styles.text}>{t(text)}</div>
    </AppLink>
  );
});
