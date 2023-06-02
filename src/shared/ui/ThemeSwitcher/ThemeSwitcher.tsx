import { classNames } from 'shared/lib/classNames/classNames';

import { useTheme } from 'app/providers/ThemeProvider';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import { Button } from 'shared/ui/Button/Button';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();

  return (
    <Button className={classNames([styles.root, className])} onClick={toggleTheme}>
      <ThemeIcon className={styles.icon} />
    </Button>
  );
};
