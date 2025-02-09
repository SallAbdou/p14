import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Select = ({ onChange, data, option }) => {

  const [value, setValue] = useState('')
  const handleOnChange = (e) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }


  return (
    <select value={value} onChange={handleOnChange}>
      {data.sort().map((item, index) => (
        <option
          key={`${option ? item[option.value] : item}-${index}`}
          value={option ? item[option.value] : item}
        >
          {option ? item[option.name] : item}
        </option>
      ))}
    </select>

  );
}

export default Select
