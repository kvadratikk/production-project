import { classNames } from 'shared/lib/classNames/classNames';

import styles from './PageLoader.module.scss';
import './PageLoader.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames([styles.root, className])}>
    <div className="lds-grid">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
