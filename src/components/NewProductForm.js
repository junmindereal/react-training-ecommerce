import { useState } from 'react'

export function NewProductForm ({ defaultValues, onSubmit }) {
  const [product, setProduct] = useState(defaultValues)

  const handleSubmit = (event) => {
    event.preventDefault()

    onSubmit(product)
  }

  const onChange = (event) => {
    const { name, value } = event.target

    setProduct({
      ...product,
      [name]: value
    })
  }

  const handleOnInvalid = (event) => {
    event.target.setCustomValidity('This field is required')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Name:
        <input
          type='text'
          required
          name='name'
          value={product.name}
          onChange={(event) => onChange(event)}
          onInvalid={(event) => handleOnInvalid(event)}
        />
      </label>
      <label> Sku:
        <input
          type='text'
          required
          name='sku'
          value={product.sku}
          onChange={(event) => onChange(event)}
          onInvalid={(event) => handleOnInvalid(event)}
        />
      </label>
      <label> Description:
        <input
          type='text'
          required
          name='description'
          value={product.description}
          onChange={(event) => onChange(event)}
          onInvalid={(event) => handleOnInvalid(event)}
        />
      </label>
      <label> Price:
        <input
          type='number'
          required
          name='price'
          value={product.price}
          onChange={(event) => onChange(event)}
          onInvalid={(event) => handleOnInvalid(event)}
        />
      </label>
      <button>Add Product</button>
    </form>
  )
}
