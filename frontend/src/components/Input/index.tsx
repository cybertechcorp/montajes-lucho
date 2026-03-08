import type { ChangeEventHandler, MouseEventHandler } from 'react'
import styles from './index.module.css'

type Props = {
  onChange?: ChangeEventHandler<HTMLInputElement>
  onClick?: MouseEventHandler<HTMLInputElement>
}

export default function Input({ onChange, onClick }: Props) {
  return (
    <input
      type="password"
      className={styles.input}
      onClick={onClick}
      onChange={onChange}
    />
  )
}