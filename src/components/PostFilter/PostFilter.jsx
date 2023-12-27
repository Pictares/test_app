import { MyInput } from '../UI/MyInput/MyInput'
import { MySelect } from '../UI/MySelect/MySelect'
import s from './PostFilter.module.css'

export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className={s.postFilter}>
      <MySelect
        value={filter.sort}
        onChange={(sort) => setFilter({ ...filter, sort })}
        defaultValue="Sort by"
        options={[
          { value: 'title', name: 'by title' },
          { value: 'body', name: 'by body' },
        ]}
      />
      <div>
        <MyInput
          value={filter.query}
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
          placeholder="Search..."
        />
      </div>
    </div>
  )
}
