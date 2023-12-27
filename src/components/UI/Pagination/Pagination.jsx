import { getPagesArray } from '../../../utils/pages'
import s from './Pagination.module.css'

export const Pagination = ({ totalPages, page, setPage }) => {
  const arrayPages = getPagesArray(totalPages)

  return (
    <div className={s.pagination}>
      {arrayPages.map((p) => (
        <button
          onClick={() => setPage(p)}
          className={p === page ? s.active : ''}
          key={p}
        >
          {p}
        </button>
      ))}
    </div>
  )
}
