import { classNames } from 'shared/lib/classNames/classNames';

import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, children, to, theme } = props;

  return (
    <Link to={to} className={classNames([styles.root, className, styles[theme]])}>
      {children}
    </Link>
  );
};
