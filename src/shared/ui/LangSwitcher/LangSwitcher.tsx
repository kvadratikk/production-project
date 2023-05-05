import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import styles from './LangSwitcher.module.scss'
import { Button } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return <div className={classNames([styles.root, className])}>{<Button onClick={toggle}>{t('Язык')}</Button>}</div>
}
;('')
