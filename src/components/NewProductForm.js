export function NewProductForm ({ name, onNameChange, sku, onSkuChange, description, onDescriptionChange, price, onPriceChange }) {
  const handleSubmit = (e) => {
    e.preventDefault()

    const product = { name, sku, description, price }

    console.log(product)
    onNameChange('')
    onSkuChange('')
    onDescriptionChange('')
    onPriceChange('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Name:
        <input
          type='text'
          required
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          onInvalid={(e) => e.target.setCustomValidity('This field is required')}
        />
      </label>
      <label> Sku:
        <input
          type='text'
          required
          value={sku}
          onChange={(e) => onSkuChange(e.target.value)}
          onInvalid={(e) => e.target.setCustomValidity('This field is required')}
        />
      </label>
      <label> Description:
        <input
          type='text'
          required
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          onInvalid={(e) => e.target.setCustomValidity('This field is required')}
        />
      </label>
      <label> Price:
        <input
          type='number'
          required
          value={price}
          onChange={(e) => onPriceChange(e.target.value)}
          onInvalid={(e) => e.target.setCustomValidity('This field is required')}
        />
      </label>
      <button>Add Product</button>
    </form>
  )
}
