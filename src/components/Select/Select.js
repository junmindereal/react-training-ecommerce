export const Select = ({ selectValue, handleChange, optionValues, optionLabels }) => {
  return (
    <select value={selectValue} onChange={handleChange}>
      {optionValues.map((value, index) => (
        <option key={index} value={value}>{optionLabels[index]}</option>

      ))}
    </select>
  )
}
