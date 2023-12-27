import s from './Loader.module.css'

export const Loader = (props) => {
  return (
    <div className={s.loaderBox}>
      <div className={s.loader}></div>
    </div>
  )
}
