import { Mods, classNames } from 'shared/lib/classNames/classNames';

import { MouseEvent, ReactNode, useCallback, useEffect, useState } from 'react';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  lazy?: boolean;
}

export const Modal = ({ className, children, isOpen, onClose, lazy }: ModalProps) => {
  const mods: Mods = {
    [styles.opened]: isOpen,
  };

  const [isMounted, setIsMounted] = useState(false);

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    if (isOpen) setIsMounted(true);
    else timer = setTimeout(() => setIsMounted(false), 300);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(styles.root, mods)}>
        <div className={styles.overlay} onClick={onClose}>
          <div className={classNames([styles.content, className])} onClick={onContentClick}>
            {lazy && !isMounted ? null : children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
