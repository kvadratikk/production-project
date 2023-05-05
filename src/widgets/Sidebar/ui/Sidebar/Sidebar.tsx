import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Sidebar.module.scss'
import { useState } from 'react'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => setCollapsed((prev) => !prev)

  return (
    <div className={classNames([styles.root, className], { [styles.collapsed]: collapsed })}>
      <button onClick={onToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
