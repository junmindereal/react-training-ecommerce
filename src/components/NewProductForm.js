import { useState } from 'react'

export function NewProductForm ({ defaultValues, onSubmit }) {
  const [product, setProduct] = useState(defaultValues)

  const handleSubmit = (event) => {
    event.preventDefault()

    onSubmit(product)

    setProduct({
      name: '',
      sku: '',
      description: '',
      price: 0
    })
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
          onChange={onChange}
          onInvalid={handleOnInvalid}
        />
      </label>
      <label> Sku:
        <input
          type='text'
          required
          name='sku'
          value={product.sku}
          onChange={onChange}
          onInvalid={handleOnInvalid}
        />
      </label>
      <label> Description:
        <input
          type='text'
          required
          name='description'
          value={product.description}
          onChange={onChange}
          onInvalid={handleOnInvalid}
        />
      </label>
      <label> Price:
        <input
          type='number'
          required
          name='price'
          value={product.price}
          onChange={onChange}
          onInvalid={handleOnInvalid}
        />
      </label>
      <button>Add Product</button>
    </form>
  )
}
