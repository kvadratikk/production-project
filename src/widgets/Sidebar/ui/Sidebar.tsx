import { classNames } from 'shared/lib/classNames/classNames';

import { useState } from 'react';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { routeConfig } from 'app/providers/router/config/routeConfig';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={classNames([styles.root, className], {
        [styles.collapsed]: collapsed,
      })}
    >
      <div className={styles.links}>
        {routeConfig
          .filter(({ key }) => key)
          .map(({ path, key, icon }) => (
            <AppLink to={`/${path}`} className={styles.link} key={path}>
              {icon}
              <div className={styles.text}>{t(key)}</div>
            </AppLink>
          ))}
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>

      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={styles.collapsedBtn}
        square
        size={ButtonSize.XL}
      >
        {collapsed ? '>' : '<'}
      </Button>
    </div>
  );
};
