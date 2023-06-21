import { classNames } from 'shared/lib/classNames/classNames';

import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import styles from './LoginModal.module.scss';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal lazy className={classNames([styles.root, className])} isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<PageLoader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
