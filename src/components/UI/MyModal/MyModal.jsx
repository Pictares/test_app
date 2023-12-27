import s from './MyModal.module.css'

export const MyModal = ({ children, visible, setVisible }) => {
  const rootClassess = [s.myModal]
  if (visible) {
    rootClassess.push(s.active)
  }

  return (
    <div onClick={() => setVisible(false)} className={rootClassess.join(' ')}>
      <div onClick={(e) => e.stopPropagation()} className={s.modalContent}>
        {children}
      </div>
    </div>
  )
}
