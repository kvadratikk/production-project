/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames([styles.root, className])}>
      <Button className={styles.btn} theme={ButtonTheme.BACKGROUND} onClick={onToggleModal}>
        {t('Log in')}
      </Button>

      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia corporis officia
        doloremque optio quisquam exercitationem ut nostrum reiciendis sint, facere, distinctio
        blanditiis. Voluptatem et quos voluptates, ea tempore quo?
      </Modal>
    </div>
  );
};
