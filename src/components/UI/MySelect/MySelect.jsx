import s from './MySelect.module.css'

export const MySelect = ({ options, defaultValue, onChange }) => {
  return (
    <select
      defaultValue={'DEFAULT'}
      onChange={(e) => onChange(e.target.value)}
      className={s.mySelect}
    >
      <option value="DEFAULT" disabled>
        {defaultValue}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.name}
        </option>
      ))}
    </select>
  )
}
