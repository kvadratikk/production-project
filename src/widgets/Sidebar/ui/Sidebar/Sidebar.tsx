import { classNames } from 'shared/lib/classNames/classNames';

import { useState } from 'react';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={classNames([styles.root, className], {
        [styles.collapsed]: collapsed,
      })}
    >
      <Button type="button" onClick={onToggle} theme={ThemeButton.DEFAULT}>
        toggle
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
