import { getUser, userActions } from 'entities/User';
import { LoginModal } from 'fearures/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const { authData } = useSelector(getUser);

  const dispatch = useAppDispatch();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    setIsAuthModal(false);
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

      <LoginModal isOpen={isAuthModal && !authData} onClose={onCloseModal} />
    </div>
  );
});
