import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Breadcrumb } from '../../components/Breadcrumb'
import { Button } from '../../components/Button'
import { NotFound } from '../../components/NotFound'
import { ProductList } from '../../components/ProductList'
import { RadioGroup } from '../../components/RadioGroup'

import { CartContext } from '../../context/cartContext'
import { ProductListContext } from '../../context/productListContext'
import { getRandomProducts } from '../../utils/getRandomProducts'

export const ProductDetailPage = () => {
  const { sku } = useParams()
  const { productList, isLoading } = useContext(ProductListContext)
  const { addToCart } = useContext(CartContext)
  const [product, setProduct] = useState()
  const [isError, setIsError] = useState(false)
  const [selectedSize, setSelectedSize] = useState()
  const [qty, setQty] = useState(1)
  const [mightLikeList, setMightLikeList] = useState([])

  useEffect(() => {
    if (productList.length > 0) {
      const product = productList.find(product => product.sku === sku)
      const relatedProductList = productList.filter(p => p.type === product.type)
      if (!product) return setIsError({ errorMessage: `Product with ${sku} sku was not found` })
      setProduct(product)
      setMightLikeList(getRandomProducts(relatedProductList, 4))
    }
  }, [sku, productList])

  const handleQtyOnBlur = (event) => {
    const parsedQty = Number(event.target.value)
    if (isNaN(parsedQty)) {
      toast.error('Please enter a number on Quantity field!')
      setQty(1)
    } else {
      setQty(parsedQty)
    }
  }

  const handleQtyOnChange = (event) => {
    setQty(event.target.value)
  }

  const handleAddToCart = () => {
    if (!product.sizes || selectedSize) {
      addToCart({
        ...product,
        selectedSize,
        id: sku + selectedSize,
        qty,
        subtotal: product.price * qty
      })
    } else {
      toast.warn('Please select product size!')
    }
  }

  const handleSelectSize = (event) => {
    setSelectedSize(event.target.value)
  }

  const handleMinusQty = () => {
    if (qty > 1) {
      setQty(prev => prev - 1)
    } else {
      setQty(1)
    }
  }

  const handlePlusQty = () => {
    setQty(prev => prev + 1)
  }

  return (
    <div>
      {isLoading && <p className='message notice'>loading...</p>}
      {product &&
        <>
          <Breadcrumb base='products' category={product.type} productName={product.name} />
          <section className='product-detail-container'>
            <div className='product-detail-img-container'>
              <img src={product.img} alt={product.description} className='product-detail-img' />
            </div>
            <div className='product-detail-info-container'>
              <p className='product-detail-sku'>{sku}</p>
              <p className='product-detail-name'>{product.name}</p>
              <p className='product-detail-description'>{product.description}</p>
              {product.sizes &&
                <div className='product-detail-size'>
                  <RadioGroup handleChange={handleSelectSize} values={product.sizes} name={sku} />
                </div>}
              <div className='product-detail-qty-wrapper'>
                <Button className='btn btn-product-qty' onClick={handleMinusQty}>-</Button>
                <input
                  className='product-detail-qty'
                  type='text'
                  required
                  name='name'
                  value={qty}
                  onChange={handleQtyOnChange}
                  onBlur={handleQtyOnBlur}
                />
                <Button className='btn btn-product-qty' onClick={handlePlusQty}>+</Button>
              </div>
              {product.inStock
                ? <p className='product-detail-price'>${product.price}</p>
                : <p className='product-detail-out-of-stock'> Out of Stock </p>}
              <Button className='btn btn-primary btn-full' onClick={handleAddToCart}>Add to Cart</Button>
            </div>
            <div className='product-list-wrapper'>
              <ProductList title='Products You Might Like' productList={mightLikeList} isLoading={isLoading} className='might-like' />
            </div>
          </section>
        </>}
      {isError && <NotFound notFound={isError} />}
    </div>
  )
}
