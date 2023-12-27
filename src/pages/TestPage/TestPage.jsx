import Select from 'react-select'
import './TestPage.module.css'

export const TestPage = () => {
  let options = [
    { label: 'Dog', value: 'dog' },
    { label: 'Piggy', value: 'piggy' },
    { label: 'Turkey', value: 'turkey' },
  ]
  return (
    <div className="App" style={{ width: 200 }}>
      <h1>React-select</h1>
      <Select
        options={options}
        defaultValue={{ label: 'Choose an animal', value: 'placeholder' }}
      ></Select>

      <hr />
    </div>
  )
}
