export const RadioGroup = ({ handleChange, name, values }) => {
  return (
    <div className='radio-group' onChange={handleChange}>
      {values.map((value, index) => (
        <label key={index} className='radio-group-set'>
          <input className='radio-group-input' type='radio' name={name} value={value} />
          <span className='radio-group-label'>
            {value}
          </span>
        </label>
      ))}
    </div>
  )
}
