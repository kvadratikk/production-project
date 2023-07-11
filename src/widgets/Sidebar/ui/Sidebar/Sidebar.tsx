import { classNames } from 'shared/lib/classNames/classNames';

import { routeConfig } from 'app/providers/router/config/routeConfig';
import { memo, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onToggle = () => setIsCollapsed((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={classNames([styles.root, className], {
        [styles.collapsed]: isCollapsed,
      })}
    >
      <div className={styles.links}>
        {routeConfig
          .filter(({ key }) => key)
          .map(({ path, key, icon }) => (
            <SidebarItem path={path} isColladsed={isCollapsed} icon={icon} key={path} text={key} />
          ))}
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={isCollapsed} />
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
        {isCollapsed ? '>' : '<'}
      </Button>
    </div>
  );
});
