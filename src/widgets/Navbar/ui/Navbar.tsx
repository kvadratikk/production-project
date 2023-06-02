import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames([styles.root, className])}>
      {/* <div className={styles.links}>
        <AppLink to="/">{t('Main Page')}</AppLink>
        <AppLink to="/about">{t('About')}</AppLink>
      </div> */}
    </div>
  );
};
