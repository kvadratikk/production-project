/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'fearures/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, userActions } from 'entities/User';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const { authData } = useSelector(getUser);

  const dispatch = useDispatch();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <div className={classNames([styles.root, className])}>
      <Button
        className={styles.btn}
        theme={ButtonTheme.BACKGROUND}
        onClick={authData ? onLogout : onShowModal}
      >
        {t(authData ? 'Log out' : 'Log in')}
      </Button>

      {!authData && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </div>
  );
};
