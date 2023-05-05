import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames([styles.root, className])}>
    <div className={styles.links}>
      <AppLink to="/">Главная</AppLink>
      <AppLink to="/about">О сайте</AppLink>
    </div>
  </div>
);
